
import CareerTimeline from "@/components/CareerTimeline";
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Briefcase, BrainCircuit, Code, MessageSquare, Users, GitBranch, Cloud, Shield, Palette, Settings, Laptop, FolderKanban, BarChartHorizontal, CheckCircle } from 'lucide-react';
import Link from "next/link";
import Image from "next/image";
import placeholderImages from "@/app/lib/placeholder-images.json";

const professionalSkillsList = [
    { title: "Communication", description: "Clearly articulate ideas, listen actively, and share feedback constructively.", icon: <MessageSquare className="h-6 w-6 text-accent" /> },
    { title: "Teamwork & Collaboration", description: "Collaborate effectively with diverse teams to achieve common goals.", icon: <Users className="h-6 w-6 text-accent" /> },
    { title: "Problem-Solving", description: "Analyze complex issues, think critically, and develop innovative solutions.", icon: <BrainCircuit className="h-6 w-6 text-accent" /> },
    { title: "Adaptability", description: "Embrace change, learn new skills quickly, and thrive in dynamic environments.", icon: <Settings className="h-6 w-6 text-accent" /> },
    { title: "Time Management", description: "Prioritize tasks, manage deadlines, and optimize productivity.", icon: <Briefcase className="h-6 w-6 text-accent" /> },
    { title: "Leadership", description: "Inspire and guide teams, make decisions, and drive projects forward.", icon: <Award className="h-6 w-6 text-accent" /> },
];

const roadmaps = [
    {
        title: "AI/Machine Learning Engineer",
        icon: <BrainCircuit className="h-5 w-5" />,
        description: "Specializes in building and deploying AI models. This role requires strong programming skills and a deep understanding of ML algorithms.",
        steps: [
            "Master Python and its data science libraries (NumPy, Pandas, Scikit-learn).",
            "Learn deep learning frameworks like TensorFlow or PyTorch.",
            "Strengthen your math foundation in Linear Algebra, Calculus, and Statistics.",
            "Understand data structures, algorithms, and computer science fundamentals.",
            "Build a portfolio of AI projects (e.g., image recognition, NLP chatbot).",
            "Get certified in a cloud platform's ML services (e.g., AWS, GCP).",
        ],
    },
    {
        title: "Data Scientist",
        icon: <BarChartHorizontal className="h-5 w-5" />,
        description: "Extracts insights from data to help organizations make better decisions. Combines statistics, computer science, and business knowledge.",
        steps: [
            "Strong foundation in statistics and probability.",
            "Proficiency in Python or R for data analysis and visualization.",
            "Experience with SQL for data querying and manipulation.",
            "Knowledge of data visualization tools (e.g., Tableau, Matplotlib) and storytelling with data.",
            "Familiarity with machine learning concepts and libraries.",
            "Develop business acumen to translate data insights into actionable strategies.",
        ],
    },
    {
        title: "Full-Stack Developer",
        icon: <Code className="h-5 w-5" />,
        description: "Works on both the front-end (client-side) and back-end (server-side) of an application.",
        steps: [
            "Learn front-end technologies: HTML, CSS, JavaScript, and a framework like React or Vue.",
            "Learn back-end technologies: A language like Node.js, Python, or Java, and a framework like Express or Django.",
            "Understand database technologies, both SQL (e.g., PostgreSQL) and NoSQL (e.g., MongoDB).",
            "Gain experience with RESTful APIs and/or GraphQL.",
            "Learn about testing methodologies, including unit and integration testing.",
            "Practice deploying applications to cloud platforms like Vercel, AWS, or Heroku.",
        ],
    },
    {
        title: "Cloud Engineer",
        icon: <Cloud className="h-5 w-5" />,
        description: "Designs, manages, and maintains an organization's cloud infrastructure on platforms like AWS, Azure, or GCP.",
        steps: [
            "Understand core cloud concepts (IaaS, PaaS, SaaS, and serverless).",
            "Get certified in a major cloud platform (e.g., AWS Certified Solutions Architect).",
            "Learn infrastructure as code (IaC) with tools like Terraform or CloudFormation.",
            "Gain experience with networking, security, and databases in the cloud.",
            "Master containerization (Docker) and orchestration (Kubernetes).",
            "Develop scripting skills in Python or Bash for automation.",
        ],
    },
    {
        title: "Cybersecurity Analyst",
        icon: <Shield className="h-5 w-5" />,
        description: "Protects an organization's computer systems and networks from cyber threats and attacks.",
        steps: [
            "Understand networking fundamentals (TCP/IP, firewalls, protocols).",
            "Learn about common security vulnerabilities, attack vectors, and threat intelligence.",
            "Gain experience with security tools (e.g., SIEM, IDS/IPS, vulnerability scanners).",
            "Get certifications like CompTIA Security+, Certified Ethical Hacker (CEH), or CISSP.",
            "Familiarize yourself with compliance frameworks like GDPR, HIPAA, and ISO 27001.",
            "Stay updated on the latest cybersecurity trends and threats.",
        ],
    },
    {
        title: "DevOps Engineer",
        icon: <GitBranch className="h-5 w-5" />,
        description: "Bridges the gap between software development and IT operations, focusing on automation and CI/CD pipelines.",
        steps: [
            "Proficiency in scripting languages like Python, Go, or Bash.",
            "Experience with CI/CD tools (e.g., Jenkins, GitLab CI, GitHub Actions).",
            "Deep understanding of version control with Git.",
            "Knowledge of containerization (Docker) and orchestration (Kubernetes).",
            "Familiarity with configuration management tools (e.g., Ansible, Puppet, Chef).",
            "Implement monitoring and observability with tools like Prometheus, Grafana, or Datadog.",
        ],
    },
    {
        title: "Software Engineer",
        icon: <Laptop className="h-5 w-5" />,
        description: "A foundational role focused on designing, developing, and maintaining software applications.",
        steps: [
            "Master at least one programming language (e.g., Python, Java, C++, JavaScript).",
            "Strong understanding of data structures, algorithms, and OOPS principles.",
            "Experience with software development lifecycle (SDLC) and Agile methodologies.",
            "Proficiency with Git, version control, and collaborative workflows.",
            "Learn software testing principles, including unit, integration, and end-to-end testing.",
            "Build a portfolio of diverse software projects that solve real-world problems.",
        ],
    },
    {
        title: "Product Manager (Tech)",
        icon: <FolderKanban className="h-5 w-5" />,
        description: "Defines the 'why,' 'what,' and 'when' of a product, acting as the bridge between business, technology, and user experience.",
        steps: [
            "Develop strong communication, leadership, and stakeholder management skills.",
            "Understand market research, user research, and competitive analysis.",
            "Learn about Agile development, Scrum, and project management.",
            "Gain a solid technical understanding to communicate effectively with engineers.",
            "Practice creating product roadmaps, writing user stories, and defining metrics (KPIs).",
            "Familiarity with data analysis and A/B testing to make data-informed decisions.",
        ],
    },
    {
        title: "UI/UX Designer",
        icon: <Palette className="h-5 w-5" />,
        description: "Focuses on creating intuitive, accessible, and visually appealing interfaces for users.",
        steps: [
            "Learn design principles (color theory, typography, layout, hierarchy).",
            "Master design and prototyping tools (e.g., Figma, Adobe XD, Sketch).",
            "Understand user research, user personas, and usability testing methodologies.",
            "Learn about information architecture and user flows.",
            "Build a strong portfolio showcasing your design process and problem-solving skills.",
            "Develop an understanding of HTML/CSS to better collaborate with developers.",
        ],
    },
    {
        title: "Blockchain Developer",
        icon: <Award className="h-5 w-5" />,
        description: "Develops decentralized applications (dApps) and smart contracts on blockchain platforms.",
        steps: [
            "Understand blockchain fundamentals (decentralization, consensus algorithms, cryptography).",
            "Learn a smart contract language like Solidity (for Ethereum) or Rust (for Solana).",
            "Gain experience with blockchain development frameworks (e.g., Hardhat, Truffle).",
            "Understand token standards like ERC-20, ERC-721, and ERC-1155.",
            "Learn about smart contract security and best practices to avoid vulnerabilities.",
            "Build and deploy your own dApps on a testnet and interact with wallets like MetaMask.",
        ],
    },
];

const ProfessionalSkillsSection = () => (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk text-gray-900 text-center mb-12">
                Essential Professional Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {professionalSkillsList.map(skill => (
                    <Card key={skill.title} className="hover:shadow-lg transition-shadow">
                        <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2">
                            <div className="bg-accent/10 p-3 rounded-full">{skill.icon}</div>
                            <CardTitle className="font-space-grotesk text-xl">{skill.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">{skill.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    </section>
);

const InterviewPrepSection = () => (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk text-gray-900 mb-6">
                Interview Preparation
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
                From crafting the perfect resume to acing the final interview, our guides cover everything you need to know to land your dream job in tech.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
                <Link href="/blog/from-resume-to-offer">
                    <Button size="lg">Resume to Offer Guide</Button>
                </Link>
                <Link href="/blog/20-essential-tips-to-ace-corporate-interviews-in-2025">
                    <Button size="lg" variant="secondary">20 Interview Tips for 2025</Button>
                </Link>
            </div>
        </div>
    </section>
);

const CareerRoadmapsSection = () => (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk text-gray-900 text-center mb-12">
                Top 10 Tech Career Roadmaps for 2026
            </h2>
            <div className="max-w-4xl mx-auto">
                <Accordion type="single" collapsible className="w-full">
                    {roadmaps.map((roadmap, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger className="text-lg font-semibold font-space-grotesk hover:no-underline">
                                <div className="flex items-center gap-4">
                                    {roadmap.icon}
                                    <span>{roadmap.title}</span>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="pt-2">
                                <p className="text-muted-foreground mb-4">{roadmap.description}</p>
                                <ul className="space-y-2">
                                    {roadmap.steps.map((step, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 flex-shrink-0"></div>
                                            <span className="text-muted-foreground">{step}</span>
                                        </li>
                                    ))}
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>
    </section>
);

const GuideDetail = ({ title, items }: { title: string; items: string[] }) => (
    <div>
        <h3 className="font-semibold text-lg text-accent mb-2">{title}</h3>
        <ul className="text-gray-300 space-y-1">
            {items.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-accent/80 mt-1 flex-shrink-0" />
                    <span>{item}</span>
                </li>
            ))}
        </ul>
    </div>
);


export default function CareerTipsAndRoadmapsPage() {
    const whatYoullFind = [
        "Step-by-step career timeline from goal setting to job application.",
        "Breakdown of essential professional and soft skills.",
        "Comprehensive interview preparation guides.",
        "Detailed roadmaps for top 10 tech jobs in 2026.",
        "Tips on building a powerful resume, portfolio, and personal brand.",
    ];

    const whoThisIsFor = [
        "Students and recent graduates planning their career.",
        "Professionals looking to transition into a tech role.",
        "Developers aiming to level up or specialize.",
        "Anyone preparing for tech interviews and job hunting.",
    ];

  return (
    <div className="bg-background text-foreground">
      <main>
        {/* New Hero Section */}
        <section className="relative bg-black text-white py-20 px-4 sm:px-6 lg:px-8">
            <Image 
                src={placeholderImages.careerTipsHero.src}
                alt="Career path abstract"
                fill
                className="object-cover opacity-20"
                data-ai-hint={placeholderImages.careerTipsHero.hint}
            />
            <div className="relative max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-6xl font-bold font-space-grotesk text-accent">
                        Career Tips & Roadmaps
                    </h1>
                    <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                        Your strategic guide to navigating the tech industry, acing interviews, and building a successful career.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    <GuideDetail title="What you’ll find here:" items={whatYoullFind} />
                    <GuideDetail title="Who this is for:" items={whoThisIsFor} />
                </div>
            </div>
        </section>

        <CareerRoadmapsSection />

        {/* Timeline Section */}
        <CareerTimeline />

        {/* New Sections */}
        <InterviewPrepSection />
        <ProfessionalSkillsSection />
      </main>
    </div>
  );
}

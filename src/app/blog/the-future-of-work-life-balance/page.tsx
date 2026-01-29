
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
        <div>{children}</div>
    </div>
);


export default function WorkLifeBalancePage() {
  const pageTitle = "The Future of Work-Life Balance: Myth or Modern Necessity?";
  const pageDescription = "Examining the evolving concept of work-life balance in the modern world, discussing whether it is an achievable goal or a myth, and exploring its significance for today’s workforce.";

  return (
    <div className="bg-white">
      <BlogHeader 
          title={pageTitle}
          description={pageDescription}
      />
      <main className="container mx-auto max-w-4xl px-4 py-16">
        <div className="flex justify-start items-center gap-4 mb-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
                <User size={16} /> Prerana
            </div>
            <span>|</span>
            <div className="flex items-center gap-2">
                <Calendar size={16} /> August 5, 2024
            </div>
            <span>|</span>
            <div className="flex items-center gap-2">
                <Folder size={16} /> Career Tips, Work-Life Balance
            </div>
        </div>
        
        <div className="prose lg:prose-xl max-w-none mx-auto text-muted-foreground">
            <p className="lead text-xl mb-8">
               Imagine a world where the average employee spends over 50 hours a week working, leaving little time for personal life. Shockingly, this is a reality for many. A recent survey found that 48% of American workers consider themselves workaholics, struggling to maintain a balance between their professional and personal lives. This blog delves into the concept of work-life balance, exploring its importance, the challenges faced, strategies for improvement, and whether it is a realistic goal or merely a modern myth.
            </p>
        </div>

        <div className="mt-8 space-y-12">
            <BlogSection title="Defining Work-Life Balance">
                <SubSection title="Concept">
                    <p>Work-life balance refers to the equilibrium between the time and effort spent on work and personal activities. In today’s context, it involves managing job responsibilities while ensuring adequate time for family, hobbies, and self-care. It’s about creating a sustainable lifestyle that prevents burnout and promotes well-being.</p>
                </SubSection>
            </BlogSection>

            <BlogSection title="Importance of Work-Life Balance">
                <SubSection title="Mental and Physical Health">
                   <p>Maintaining a balance is crucial for overall well-being. Chronic work stress can lead to mental health issues like anxiety and depression, as well as physical ailments such as heart disease. Balancing work with personal time helps reduce stress, promoting better health.</p>
                </SubSection>
                <SubSection title="Employee Satisfaction">
                    <p>Work-life balance significantly impacts job satisfaction. Employees with a healthy balance are happier, more loyal, and less likely to leave their jobs. This satisfaction translates to higher morale and a more positive workplace culture, benefiting both employees and employers.</p>
                </SubSection>
            </BlogSection>

            <BlogSection title="Challenges in Achieving Work-Life Balance">
                <SubSection title="Technological Advances">
                    <p>While technology has revolutionized the workplace, it has also made it difficult to disconnect from work. Smartphones and laptops mean work can intrude into personal time, creating a constant pressure to be available.</p>
                </SubSection>
                <SubSection title="Cultural Expectations">
                    <p>Societal norms and organizational cultures often glorify overwork, equating long hours with dedication and success. This mindset makes it challenging for individuals to set boundaries and prioritize personal time without fearing judgment or career repercussions.</p>
                </SubSection>
                <SubSection title="Personal Boundaries">
                    <p>Setting and maintaining personal boundaries is a skill many struggle with. The fear of missing out on opportunities or appearing uncommitted can lead to overcommitting and neglecting personal life. Developing the discipline to say no and allocate time for oneself is essential but difficult.</p>
                </SubSection>
            </BlogSection>

            <BlogSection title="Strategies for Better Work-Life Balance">
                 <SubSection title="Flexible Work Arrangements">
                    <p>Employers can support balance by offering remote work, flexible hours, and job sharing. These arrangements give employees control over their schedules, allowing them to manage work and personal commitments more effectively.</p>
                </SubSection>
                 <SubSection title="Time Management">
                    <p>Effective time management and prioritization are key to achieving balance. Techniques such as the Pomodoro Technique, time blocking, and setting clear priorities can help individuals manage their workload without encroaching on personal time.</p>
                </SubSection>
            </BlogSection>

            <BlogSection title="Debate: Myth or Modern Necessity?">
                <SubSection title="Arguments for Myth">
                    <p>Some argue that work-life balance is an unattainable ideal in a hyper-competitive, always-on world. The constant demands of modern work, coupled with societal pressures, make it seem more like a myth than a reality.</p>
                </SubSection>
                 <SubSection title="Arguments for Necessity">
                    <p>On the other hand, many believe that achieving work-life balance is essential for long-term health, happiness, and productivity. They argue that with the right strategies and support systems, it is possible to create a sustainable balance that benefits both individuals and organizations.</p>
                </SubSection>
            </BlogSection>

            <BlogSection title="Future Trends">
                 <SubSection title="Technological Innovations">
                    <p>Emerging technologies such as AI and automation might alleviate some work pressures, potentially enhancing work-life balance. These advancements could reduce the time spent on mundane tasks, allowing more time for creative and personal pursuits.</p>
                </SubSection>
                <SubSection title="Changing Workforce Dynamics">
                    <p>Trends like the gig economy, remote work, and evolving job roles are reshaping the concept of work. These dynamics offer more flexibility and autonomy, which could help individuals achieve a better balance between work and personal life.</p>
                </SubSection>
            </BlogSection>
        </div>

        <div className="mt-12 text-center text-lg text-muted-foreground prose lg:prose-xl max-w-none mx-auto">
           <p>In conclusion, work-life balance is not just a modern buzzword but a crucial aspect of a healthy and productive life. While it presents challenges, especially in a technology-driven world, it is a necessity for overall well-being. By adopting flexible work arrangements, effective time management, and organizational support, achieving work-life balance is within reach. Reflect on your own balance, share your experiences, and explore ways to create a more balanced life.</p>
           <p><strong>How do you manage your work-life balance? Share your strategies and experiences in the comments below and join the conversation about creating a healthier, more balanced future.</strong></p>
        </div>
        
      </main>
    </div>
  );
}

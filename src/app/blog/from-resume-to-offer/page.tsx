
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

const GuideSection = ({ number, title, children }: { number: number, title: string, children: React.ReactNode }) => (
    <section className="mb-12">
        <h2 className="text-3xl font-bold font-space-grotesk text-gray-900 mb-6 pb-2 border-b">{number}. {title}</h2>
        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">{children}</div>
    </section>
);

const SubSection = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <div>
        <h3 className="text-2xl font-semibold font-space-grotesk text-gray-800 mb-3">{title}</h3>
        {children}
    </div>
);

export default function ResumeToOfferPage() {
  const pageDescription = "Landing a job in today’s competitive market requires more than just a well-crafted resume. This guide walks you through the entire journey—from crafting a standout resume to securing a job offer.";
  
  return (
    <div className="bg-white">
      <BlogHeader 
          title="From Resume to Offer: A Complete Guide to Cracking Job Interviews"
          description={pageDescription}
      />
      <main className="container mx-auto max-w-4xl px-4 py-16">
        <div className="flex justify-start items-center gap-4 mb-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
                <User size={16} /> Prerana
            </div>
            <span>|</span>
            <div className="flex items-center gap-2">
                <Calendar size={16} /> August 1, 2024
            </div>
            <span>|</span>
            <div className="flex items-center gap-2">
                <Folder size={16} /> Career, Interview Tips
            </div>
        </div>
        
        <div className="prose lg:prose-xl max-w-none mx-auto text-muted-foreground">
            <p className="lead text-xl mb-8">
                The interview process is a critical step where candidates must showcase their skills, experience, and personality effectively. This guide walks you through the entire journey—from crafting a standout resume to securing a job offer.
            </p>
        </div>

        <div className="mt-8">
            <GuideSection number={1} title="Crafting a Winning Resume">
                <p>A well-structured resume is your first step toward getting noticed by recruiters. Here’s how to make it impactful:</p>
                <SubSection title="1.1 Key Components of a Resume">
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Contact Information:</strong> Include your name, email, phone number, and LinkedIn profile.</li>
                        <li><strong>Professional Summary:</strong> A brief 2-3 sentence introduction highlighting your skills and career goals.</li>
                        <li><strong>Skills:</strong> List relevant technical and soft skills required for the role.</li>
                        <li><strong>Work Experience:</strong> Mention previous jobs, internships, or projects with achievements in bullet points.</li>
                        <li><strong>Education:</strong> Include degrees, certifications, and relevant coursework.</li>
                        <li><strong>Projects & Certifications:</strong> Showcase additional achievements that highlight your expertise.</li>
                    </ul>
                </SubSection>
                <SubSection title="1.2 Resume Optimization Tips">
                     <ul className="list-disc pl-6 space-y-2">
                        <li>Tailor your resume to match the job description.</li>
                        <li>Use action verbs like “developed,” “managed,” and “implemented.”</li>
                        <li>Quantify achievements (e.g., “Increased sales by 30% in 6 months”).</li>
                        <li>Keep it concise (1-2 pages max).</li>
                        <li>Check for grammar and formatting errors using tools like Grammarly or Hemingway Editor.</li>
                    </ul>
                </SubSection>
            </GuideSection>

            <GuideSection number={2} title="Preparing for the Interview">
                <p>Once your resume grabs attention, the next step is preparation. Follow these steps to boost your confidence:</p>
                <SubSection title="2.1 Research the Company">
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Visit the company’s website, read their mission statement, and understand their products/services.</li>
                        <li>Follow their social media accounts to stay updated.</li>
                        <li>Read recent news articles about the company’s achievements and industry trends.</li>
                    </ul>
                </SubSection>
                <SubSection title="2.2 Understand the Job Role">
                     <ul className="list-disc pl-6 space-y-2">
                        <li>Carefully review the job description.</li>
                        <li>Identify key skills required and match them with your experience.</li>
                        <li>Be ready to discuss how you can add value to the company.</li>
                    </ul>
                </SubSection>
                 <SubSection title="2.3 Practice Common Interview Questions">
                     <h4 className="font-semibold mt-4 mb-2">Technical Questions</h4>
                     <ul className="list-disc pl-6 space-y-2">
                         <li>Review key concepts related to your field (e.g., coding, system design, data structures for tech roles).</li>
                         <li>Use platforms like LeetCode, HackerRank, or CodeSignal for coding practice.</li>
                     </ul>
                      <h4 className="font-semibold mt-4 mb-2">Behavioral Questions (STAR Method)</h4>
                      <p>Use the STAR method (Situation, Task, Action, Result) to structure responses:</p>
                     <ul className="list-disc pl-6 space-y-2">
                         <li>Tell me about a time you faced a challenge at work.</li>
                         <li>How do you handle tight deadlines?</li>
                         <li>Describe a situation where you worked in a team to solve a problem.</li>
                     </ul>
                </SubSection>
                 <SubSection title="2.4 Mock Interviews & Body Language">
                     <ul className="list-disc pl-6 space-y-2">
                         <li>Conduct mock interviews with a friend or use platforms like Pramp and Interviewing.io.</li>
                         <li>Maintain good posture, eye contact, and a confident tone.</li>
                         <li>Avoid filler words like “um” and “uh.”</li>
                     </ul>
                </SubSection>
            </GuideSection>

            <GuideSection number={3} title="The Interview Day">
                 <p>Making a strong impression during the interview is crucial. Follow these steps:</p>
                 <SubSection title="3.1 Dressing for Success">
                     <ul className="list-disc pl-6 space-y-2">
                        <li>Dress in formal or business-casual attire based on company culture.</li>
                        <li>Keep your appearance neat and professional.</li>
                    </ul>
                 </SubSection>
                 <SubSection title="3.2 Arriving on Time">
                     <ul className="list-disc pl-6 space-y-2">
                        <li>For in-person interviews, arrive at least 15 minutes early.</li>
                        <li>For virtual interviews, test your camera, microphone, and internet connection beforehand.</li>
                    </ul>
                 </SubSection>
                 <SubSection title="3.3 Answering Questions Effectively">
                     <ul className="list-disc pl-6 space-y-2">
                        <li>Keep responses concise yet informative.</li>
                        <li>Align answers with company values and job requirements.</li>
                        <li>If unsure about a question, take a moment to structure your response.</li>
                    </ul>
                 </SubSection>
                 <SubSection title="3.4 Asking Questions">
                    <p>At the end of the interview, ask insightful questions like:</p>
                     <ul className="list-disc pl-6 space-y-2">
                        <li>What does a typical day in this role look like?</li>
                        <li>What are the biggest challenges the team is facing right now?</li>
                        <li>What are the next steps in the hiring process?</li>
                    </ul>
                 </SubSection>
            </GuideSection>

            <GuideSection number={4} title="Post-Interview Etiquette">
                 <p>Following up after an interview shows professionalism and interest in the role.</p>
                 <SubSection title="4.1 Sending a Thank-You Email">
                     <p>Send a follow-up email within 24 hours, thanking the interviewer for their time. Example:</p>
                     <div className="p-4 bg-gray-100 rounded-md my-4 border-l-4 border-accent">
                        <p className="font-semibold">Subject: Thank You for the Interview Opportunity</p>
                        <p>Dear [Interviewer’s Name],</p>
                        <p className="mt-2">I appreciate the opportunity to interview for the [Job Title] position at [Company Name]. It was great discussing [specific topic] with you. I’m excited about the possibility of joining your team and contributing to [company goal]. Looking forward to the next steps!</p>
                        <p className="mt-4">Best regards,</p>
                        <p>[Your Name]</p>
                     </div>
                 </SubSection>
                 <SubSection title="4.2 Following Up on Status">
                     <ul className="list-disc pl-6 space-y-2">
                        <li>If you haven’t heard back in a week, send a polite follow-up email.</li>
                        <li>Express continued interest and inquire about the hiring timeline.</li>
                    </ul>
                 </SubSection>
            </GuideSection>

            <GuideSection number={5} title="Handling Job Offers and Negotiation">
                 <SubSection title="5.1 Evaluating the Offer">
                     <p>Before accepting a job offer, consider:</p>
                     <ul className="list-disc pl-6 space-y-2">
                        <li>Salary and benefits</li>
                        <li>Career growth opportunities</li>
                        <li>Work-life balance and company culture</li>
                    </ul>
                 </SubSection>
                 <SubSection title="5.2 Salary Negotiation Tips">
                     <ul className="list-disc pl-6 space-y-2">
                        <li>Research industry salary benchmarks using Glassdoor or Payscale.</li>
                        <li>Politely express your salary expectations.</li>
                        <li>Be flexible and focus on total compensation (benefits, bonuses, remote work options, etc.).</li>
                    </ul>
                 </SubSection>
                 <SubSection title="5.3 Accepting or Declining an Offer">
                     <ul className="list-disc pl-6 space-y-2">
                        <li>If accepting, express enthusiasm and confirm the start date.</li>
                        <li>If declining, politely thank them and keep doors open for future opportunities.</li>
                    </ul>
                 </SubSection>
            </GuideSection>
        </div>

        <div className="mt-12 text-center text-lg text-muted-foreground prose lg:prose-xl max-w-none mx-auto">
           <p>Cracking a job interview is about preparation, confidence, and follow-up. By crafting a strong resume, practicing interview skills, and handling offers professionally, you can navigate the hiring process successfully. Keep learning, stay adaptable, and approach each interview as a learning opportunity!</p>
            <p><strong>Need more career tips? Stay tuned for more guides on Simplified Computer Science!</strong></p>
        </div>
        
      </main>
    </div>
  );
}

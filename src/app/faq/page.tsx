import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";

const faqSections = [
    {
        title: "Course Plan",
        items: [
            {
                question: "Who is Simplified Computer Science for?",
                answer: "Our platform is designed for learners of all levels, from beginners to advanced users. Whether you’re a student, a professional, or simply curious about computer science and AI, you’ll find valuable resources here to help you learn and grow."
            },
            {
                question: "Who is the founder of Simplified Computer Science?",
                answer: "Simplified Computer Science was founded by Prerana Kailash Pattnaik, a Prompt Expert, WordPress Developer, and Content Creator. She holds an MCA degree and a certification in AI and agility from Scrum Alliance. As the Founder and CEO of Simplified Computer Science, Prerana is dedicated to making technology education accessible through Free courses, EBooks, Blogs, and Engaging content."
            },
            {
                question: "Are Simplified Computer Science's courses free?",
                answer: "Yes, all courses offered on Simplified Computer Science are completely free. You only need to sign up for a free account to access the courses and other resources available on the platform."
            },
            {
                question: "What topics are covered on Simplified Computer Science?",
                answer: "We cover a wide range of topics including, but not limited to, computer science basics, AI and machine learning, web development, programming, prompt engineering, and technology trends."
            },
            {
                question: "Is there a fee for accessing the courses?",
                answer: "All courses on Simplified Computer Science are available free of charge. Simply sign up for a free account to access all the course content and resources."
            },
            {
                question: "How can I enroll in a course?",
                answer: "To enroll in a course, visit the course catalog on our website, select the course you’re interested in, and click the “Enroll” button. You will need to create a free account or log in to an existing account to start accessing the course materials."
            },
            {
                question: "Will I receive a certificate upon course completion?",
                answer: "Yes, Simplified Computer Science provides certificates for course completion. You can personalize and download your certificate using Canva. We offer a link to Canva and a step-by-step guide on how to edit your name and download your certificate."
            },
            {
                question: "What should I do if I have questions or need help with a course?",
                answer: "For any questions or assistance with a course, please visit our Contact Us page. Our support team is available to help with any course-related inquiries or issues you may encounter."
            },
            {
                question: "Will I have ongoing access to the course materials after completion?",
                answer: "Yes, once you enroll in a course, you will have continuous access to the course materials even after completing the course. This allows you to review content and revisit any sections as needed."
            }
        ]
    },
    {
        title: "Certificates, Degrees, and Job Opportunities",
        items: [
            {
                question: "Does Simplified Computer Science offer certificates for course completion?",
                answer: "Yes, Simplified Computer Science provides certificates for course completion. You can personalize and download your certificate using Canva. We offer a link to Canva and a step-by-step guide on how to edit your name and download your certificate."
            },
            {
                question: "How do I edit my name on the certificate using Canva?",
                answer: (
                    <>
                        To edit your name on the certificate:
                        <ol className="list-decimal list-inside mt-2 space-y-1">
                            <li><strong>Click the Canva Link:</strong> Access the certificate template through the provided Canva link.</li>
                            <li><strong>Edit Text:</strong> Use Canva’s text editing tools to change the name on the certificate.</li>
                            <li><strong>Download:</strong> Once you’ve made your changes, download the edited certificate directly from Canva.</li>
                        </ol>
                        For detailed instructions, please refer to the step-by-step guide available on our Certificates page.
                    </>
                )
            },
            {
                question: "Can I add the courses completed on Simplified Computer Science to my resume or LinkedIn profile?",
                answer: "Absolutely! You can list the courses you have completed on Simplified Computer Science on your resume or LinkedIn profile. Highlighting the skills and knowledge gained can demonstrate your commitment to continuous learning and professional development."
            },
            {
                question: "Will completing courses on Simplified Computer Science help me get a degree?",
                answer: "Simplified Computer Science does not offer degrees or formal academic qualifications. Our courses are designed to provide practical knowledge and skills that can complement your existing education and help you in your career development."
            },
            {
                question: "Can I use the skills learned from your courses to improve my job prospects?",
                answer: "Yes, the skills and knowledge gained from our courses can enhance your job prospects and professional growth. Our content is designed to be practical and applicable, helping you develop competencies relevant to various technology and computer science roles."
            },
            {
                question: "Are there any job placement services or career support available through Simplified Computer Science?",
                answer: "We do not offer direct job placement services or career support. However, the knowledge and skills acquired from our courses can be valuable assets when seeking employment. We encourage you to utilize the skills learned to explore job opportunities and advance your career."
            },
            {
                question: "Will completing your courses provide me with any formal recognition or accreditation?",
                answer: "No, our courses do not offer formal recognition or accreditation. They are intended to provide practical learning experiences and enhance your understanding of various topics within computer science and technology."
            },
            {
                question: "What kind of content will I receive in the newsletter?",
                answer: "Our newsletter includes updates on new courses, blog posts, tutorials, platform news, and special announcements. It is designed to keep you informed about the latest offerings and developments on Simplified Computer Science."
            }
        ]
    },
    {
        title: "Sign Up and Newsletter",
        items: [
            {
                question: "How do I sign up for an account on Simplified Computer Science?",
                answer: "To sign up for an account, click on the “Sign Up” button located at the top right corner of our homepage. You will be prompted to enter your email address and create a password. Once you complete the registration, you will have access to all the free content and courses available on our platform."
            },
            {
                question: "Is my personal information safe with Simplified Computer Science?",
                answer: (
                    <>
                        Absolutely. We take your privacy and security very seriously. Your personal information is protected using industry-standard security measures. We do not share your information with third parties without your consent. For more details on how we handle your personal data, please review our <Link href="/privacy" className="text-accent underline">Privacy Policy</Link>.
                    </>
                )
            },
            {
                question: "How do I reset my password if I forget it?",
                answer: "If you forget your password, go to the login page and click on the “Forgot Password” link. You will be asked to enter your email address, and we will send you instructions on how to reset your password."
            },
            {
                question: "What topics are covered on Simplified Computer Science?",
                answer: "We cover a wide range of topics including, but not limited to, computer science basics, AI and machine learning, web development, programming, prompt engineering, and technology trends."
            },
            {
                question: "Can I unsubscribe from the newsletter?",
                answer: "Yes, you can unsubscribe from the newsletter at any time. Each newsletter email includes an “Unsubscribe” link at the bottom. Click on this link to remove your email address from our mailing list."
            },
            {
                question: "What kind of content will I receive in the newsletter?",
                answer: "Our newsletter includes updates on new courses, blog posts, tutorials, platform news, and special announcements. It is designed to keep you informed about the latest offerings and developments on Simplified Computer Science."
            }
        ]
    },
    {
        title: "Website Privacy Policy",
        items: [
            {
                question: "Can I use images from the Simplified Computer Science website for commercial purposes or in my own projects?",
                answer: "No, images and other content from our website are not permitted for commercial use or inclusion in your own projects. We recommend checking out Freepik for high-quality images that are available for commercial use. For editing, you can explore Canva."
            },
            {
                question: "How is my personal information protected?",
                answer: "We use industry-standard security measures to protect your personal information from unauthorized access, use, or disclosure. This includes employing encryption technologies, secure servers, and access controls. Despite these measures, no method of transmission over the internet or electronic storage is completely secure, so we cannot guarantee absolute security."
            },
            {
                question: "How is my personal information used?",
                answer: "Your personal information is used to provide and enhance our services, communicate with you, and send updates about new content or features. We may also use your information for administrative purposes, such as managing your account and addressing any issues or inquiries."
            },
            {
                question: "How do you handle cookies and tracking technologies?",
                answer: "We use cookies and other tracking technologies to enhance your experience on our website, such as remembering your preferences and analyzing website traffic. You can manage your cookie preferences through your browser settings, but please note that disabling cookies may affect the functionality of our site."
            }
        ]
    }
];

export default function FaqPage() {
    return (
        <div className="container mx-auto max-w-7xl px-4 py-16">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold font-space-grotesk">Frequently Asked Questions</h1>
                <p className="mt-4 text-lg text-muted-foreground">
                    Find answers to the most common questions about our platform, courses, and more.
                </p>
            </div>
            <div className="max-w-4xl mx-auto space-y-12">
                {faqSections.map((section, sectionIndex) => (
                    <div key={sectionIndex}>
                        <h2 className="text-2xl md:text-3xl font-bold font-space-grotesk mb-6 text-gray-900">{section.title}</h2>
                        <Accordion type="single" collapsible className="w-full">
                            {section.items.map((item, itemIndex) => (
                                <AccordionItem key={itemIndex} value={`item-${sectionIndex}-${itemIndex}`}>
                                    <AccordionTrigger className="text-lg font-semibold font-space-grotesk text-left">{item.question}</AccordionTrigger>
                                    <AccordionContent className="text-base text-muted-foreground">
                                        {typeof item.answer === 'string' ? <p>{item.answer}</p> : item.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                ))}
            </div>
            <div className="text-center mt-16">
                <h3 className="text-2xl font-bold font-space-grotesk">Still have questions?</h3>
                <p className="mt-2 text-lg text-muted-foreground">
                    If you can't find the answer you're looking for, please don't hesitate to reach out to us.
                </p>
                <Link href="/contact">
                    <button className="mt-6 bg-accent text-accent-foreground font-bold py-3 px-8 rounded-full hover:bg-yellow-500 transition-colors">
                        Contact Us
                    </button>
                </Link>
            </div>
        </div>
    )
}

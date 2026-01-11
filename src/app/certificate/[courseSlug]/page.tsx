
'use client';

import { useState, useRef } from 'react';
import { notFound, useParams } from 'next/navigation';
import { getCourseBySlug } from '@/app/lib/courses';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Download, Linkedin } from 'lucide-react';
import { toPng } from 'html-to-image';
import { jsPDF } from 'jspdf';
import Link from 'next/link';
import Image from 'next/image';

export default function CertificatePage() {
    const [studentName, setStudentName] = useState('Learner Name');
    const { courseSlug } = useParams<{ courseSlug: string }>();
    const certificateRef = useRef<HTMLDivElement>(null);

    const course = getCourseBySlug(courseSlug);

    if (!course) {
        notFound();
    }

    const handleDownloadImage = () => {
        if (certificateRef.current) {
            toPng(certificateRef.current, { cacheBust: true, pixelRatio: 2 })
                .then((dataUrl) => {
                    const link = document.createElement('a');
                    link.download = `SCS_${course.title.replace(/ /g, '_')}_Certificate.png`;
                    link.href = dataUrl;
                    link.click();
                })
                .catch((err) => {
                    console.error('oops, something went wrong!', err);
                });
        }
    };
    
    const handleDownloadPdf = () => {
        if (certificateRef.current) {
            toPng(certificateRef.current, { cacheBust: true, pixelRatio: 2 })
                .then((dataUrl) => {
                    const pdf = new jsPDF({
                        orientation: 'landscape',
                        unit: 'px',
                        format: [1100, 850]
                    });
                    pdf.addImage(dataUrl, 'PNG', 0, 0, 1100, 850);
                    pdf.save(`SCS_${course.title.replace(/ /g, '_')}_Certificate.pdf`);
                });
        }
    };

    const handleShareToLinkedIn = () => {
        const linkedInUrl = `https://www.linkedin.com/profile/add?startTask=CERTIFICATION_NAME&name=${encodeURIComponent(course.title)}&organizationName=${encodeURIComponent('Simplified Computer Science')}&issueYear=${new Date().getFullYear()}&issueMonth=${new Date().getMonth() + 1}&certUrl=${encodeURIComponent(window.location.href)}`;
        window.open(linkedInUrl, '_blank');
    };

    return (
        <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
                    <h1 className="text-3xl font-bold font-space-grotesk text-gray-900 mb-2">Claim Your Certificate</h1>
                    <p className="text-muted-foreground mb-6">You've earned it! Enter your name as you'd like it to appear on the certificate.</p>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Input
                            type="text"
                            placeholder="Enter your full name"
                            value={studentName}
                            onChange={(e) => setStudentName(e.target.value)}
                            className="max-w-sm text-lg"
                        />
                         <Button onClick={handleDownloadImage} size="lg">
                            <Download className="mr-2 h-5 w-5" /> Download as Image
                        </Button>
                        <Button onClick={handleDownloadPdf} size="lg" variant="secondary">
                            <Download className="mr-2 h-5 w-5" /> Download as PDF
                        </Button>
                        <Button onClick={handleShareToLinkedIn} size="lg" variant="secondary" className="bg-[#0077B5] hover:bg-[#005E92] text-white">
                            <Linkedin className="mr-2 h-5 w-5" /> Share on LinkedIn
                        </Button>
                    </div>
                </div>

                {/* Certificate */}
                <div ref={certificateRef} className="relative" style={{ width: '1100px', height: '850px', margin: '0 auto', backgroundColor: '#00003D' }}>
                    <div className="absolute inset-[20px]" style={{backgroundColor: 'hsl(var(--primary))'}}>
                         <div className="absolute inset-[2px] bg-white">
                            <div className="w-full h-full p-10 flex flex-col items-center text-[#0D3A39]">
                                
                                {/* Logo */}
                                <div className="text-center mb-10">
                                    <Image src="https://i.postimg.cc/rs90fh6y/3.png" alt="SCS Logo" width={180} height={60} />
                                </div>

                                <h1 className="text-5xl font-serif font-bold">Certificate of Completion</h1>
                                
                                <p className="text-xl mt-6">This Certificate is awarded to</p>
                                
                                <h2 className="text-6xl font-bold font-space-grotesk my-4 break-words max-w-full px-4 text-[#062121]">
                                    {studentName || 'Learner Name'}
                                </h2>
                                
                                <p className="text-xl max-w-2xl text-center">
                                    has successfully completed the course
                                </p>
                                <h3 className="text-4xl font-serif font-semibold mt-4 mb-8 text-center">
                                    {course.title}
                                </h3>
                                
                                <div className="relative w-32 h-32 mt-auto mb-10">
                                      <Image src="https://i.postimg.cc/BnxqSkvV/Deep_Blue_Border_Certificate_of_Completion_(2)_Copy.png" alt="SCS Medal" layout="fill" objectFit="contain" />
                                </div>

                                <div className="w-full flex justify-between items-end px-16 absolute bottom-16">
                                    <div className="text-center">
                                        <p className="font-serif text-xl font-semibold border-b border-dotted border-gray-400 pb-1 px-4">Prerana Pattnaik</p>
                                        <p className="text-xs text-gray-500 tracking-widest mt-1">COURSE DIRECTOR</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="font-serif text-xl font-semibold border-b border-dotted border-gray-400 pb-1 px-4">Khusi Kumari</p>
                                        <p className="text-xs text-gray-500 tracking-widest mt-1">PROGRAM DIRECTOR</p>
                                    </div>
                                </div>
                            </div>
                         </div>
                    </div>
                </div>

                <div className="mt-8 text-center">
                    <Link href="/courses-live">
                        <Button variant="link">Explore more courses</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

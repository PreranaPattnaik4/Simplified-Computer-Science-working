
import { Bot, Lightbulb, GraduationCap, Briefcase } from 'lucide-react';
import Image from 'next/image';
import placeholderImages from '@/app/lib/placeholder-images.json';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function AiAssistantPage() {
  return (
    <div className="bg-background text-foreground">
      <main>
        {/* Hero Section */}
        <section className="bg-gray-50/50 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-primary/20 rounded-full">
                  <Bot className="h-8 w-8 text-primary" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold font-space-grotesk text-gray-900 leading-tight">
                  SCS AI Assistant
                </h1>
              </div>
              <p className="mt-4 text-lg text-muted-foreground">
                Your personal guide to Simplified Computer Science. I'm here to help you find information, understand concepts, and navigate your learning journey. Just ask!
              </p>
              <p className="mt-4 text-muted-foreground">
                Click the chat icon in the bottom-right corner to start a conversation anytime.
              </p>
            </div>
            <div className="w-full h-80 relative rounded-lg overflow-hidden shadow-lg">
                <Image
                    src={placeholderImages.aiAssistant.src}
                    alt="AI Assistant"
                    fill
                    className="object-cover"
                    data-ai-hint={placeholderImages.aiAssistant.hint}
                />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk text-gray-900">What Can I Help You With?</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                    I'm trained on all the content across Simplified Computer Science. Here are a few things you can ask me:
                </p>
            </div>
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="text-center">
                    <CardHeader className="items-center">
                        <div className="mx-auto bg-accent/10 p-4 rounded-full w-fit mb-2">
                            <GraduationCap className="h-8 w-8 text-accent"/>
                        </div>
                        <CardTitle className="font-space-grotesk">Course Information</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">"Tell me about the Python for Data Science course."</p>
                    </CardContent>
                </Card>
                <Card className="text-center">
                    <CardHeader className="items-center">
                        <div className="mx-auto bg-accent/10 p-4 rounded-full w-fit mb-2">
                            <Briefcase className="h-8 w-8 text-accent"/>
                        </div>
                        <CardTitle className="font-space-grotesk">Career Advice</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">"What skills do I need to become a Cloud Engineer?"</p>
                    </CardContent>
                </Card>
                <Card className="text-center">
                    <CardHeader className="items-center">
                        <div className="mx-auto bg-accent/10 p-4 rounded-full w-fit mb-2">
                           <Lightbulb className="h-8 w-8 text-accent"/>
                        </div>
                        <CardTitle className="font-space-grotesk">Concept Explanations</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">"Explain what an API is in simple terms."</p>
                    </CardContent>
                </Card>
            </div>
        </section>
      </main>
    </div>
  );
}

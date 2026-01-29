
'use client'

import { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, XCircle, RefreshCw, ChevronLeft, ChevronRight, PartyPopper } from 'lucide-react';
import { marked } from 'marked';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Progress } from './ui/progress';

type Option = {
    id: string;
    text: string;
}

type Question = {
    question: string;
    options: Option[];
    correctAnswer: string;
    explanation: string;
}

type Lesson = {
    title: string;
    content: string;
    questions: Question[];
}

type QuizProps = {
    lesson: Lesson;
    courseSlug: string;
    onComplete: () => void;
}

export default function Quiz({ lesson, courseSlug, onComplete }: QuizProps) {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const currentQuestion = lesson.questions[currentQuestionIndex];
    const totalQuestions = lesson.questions.length;
    const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;

    const handleSelectAnswer = (questionIndex: number, answerId: string) => {
        setSelectedAnswers(prev => ({ ...prev, [questionIndex]: answerId }));
    };

    const handleNext = () => {
        if (currentQuestionIndex < totalQuestions - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
        }
    };

    const handleBack = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(prev => prev - 1);
        }
    };

    const handleSubmit = () => {
        setIsSubmitted(true);
        const correctCount = lesson.questions.reduce((acc, q, index) => {
            return selectedAnswers[index] === q.correctAnswer ? acc + 1 : acc;
        }, 0);
        if ((correctCount / totalQuestions) >= 0.7) {
             onComplete();
        }
    };
    
    const handleTryAgain = () => {
        setSelectedAnswers({});
        setCurrentQuestionIndex(0);
        setIsSubmitted(false);
    };

    if (isSubmitted) {
        const correctCount = lesson.questions.reduce((acc, q, index) => {
            return selectedAnswers[index] === q.correctAnswer ? acc + 1 : acc;
        }, 0);
        const score = Math.round((correctCount / totalQuestions) * 100);
        const passed = score >= 70;

        return (
            <Card>
                <CardHeader>
                    <CardTitle className="text-2xl font-bold font-space-grotesk">Quiz Results</CardTitle>
                    <CardDescription>You scored {score}%</CardDescription>
                </CardHeader>
                <CardContent>
                    {passed ? (
                        <div className="text-center p-6 bg-green-50 rounded-lg">
                            <PartyPopper className="w-16 h-16 text-green-500 mx-auto mb-4" />
                            <h3 className="text-2xl font-bold text-green-700">Congratulations, you passed!</h3>
                            <p className="text-green-600 mt-2">You have successfully completed the course assessment.</p>
                            <Link href={`/certificate/${courseSlug}`} passHref>
                                <Button className="mt-6">
                                    Get Your Certificate
                                </Button>
                            </Link>
                        </div>
                    ) : (
                        <div className="text-center p-6 bg-red-50 rounded-lg">
                            <XCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
                            <h3 className="text-2xl font-bold text-red-700">Needs Improvement</h3>
                            <p className="text-red-600 mt-2">You need a score of 70% or higher to pass. Keep studying and try again!</p>
                            <Button onClick={handleTryAgain} className="mt-6">
                                <RefreshCw className="h-4 w-4 mr-2" />
                                Retake Quiz
                            </Button>
                        </div>
                    )}

                    <div className="mt-8 space-y-6">
                        <h4 className="text-xl font-bold font-space-grotesk">Review Your Answers</h4>
                        {lesson.questions.map((q, index) => {
                            const userAnswer = selectedAnswers[index];
                            const isCorrect = userAnswer === q.correctAnswer;
                            return (
                                <div key={index} className="border-t pt-4">
                                    <p className="font-semibold">{index + 1}. {q.question}</p>
                                    <div className="mt-2 text-sm">
                                        <p>Your answer: <span className={cn(isCorrect ? "text-green-600" : "text-red-600")}>{q.options.find(o => o.id === userAnswer)?.text || 'Not answered'}</span></p>
                                        {!isCorrect && <p>Correct answer: <span className="text-green-600">{q.options.find(o => o.id === q.correctAnswer)?.text}</span></p>}
                                        <p className="text-gray-500 mt-1">{q.explanation}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </CardContent>
            </Card>
        )
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle className="font-space-grotesk">{lesson.title}</CardTitle>
                <CardDescription>Question {currentQuestionIndex + 1} of {totalQuestions}</CardDescription>
                <Progress value={progress} className="mt-2" />
            </CardHeader>
            <CardContent>
                <div className="prose lg:prose-lg max-w-none mb-6" dangerouslySetInnerHTML={{ __html: marked(currentQuestion.question) }} />

                <div className="space-y-3">
                    {currentQuestion.options.map((option) => {
                        const isSelected = selectedAnswers[currentQuestionIndex] === option.id;
                        return (
                            <div
                                key={option.id}
                                className={cn(
                                    "flex items-start space-x-3 rounded-md border p-4 cursor-pointer transition-all",
                                    "hover:bg-accent/10",
                                    isSelected ? 'bg-accent/10 border-accent' : 'border-gray-300'
                                )}
                                onClick={() => handleSelectAnswer(currentQuestionIndex, option.id)}
                            >
                                <div className={cn(
                                    "flex h-6 w-6 items-center justify-center rounded-full border text-sm font-semibold flex-shrink-0 mt-0.5",
                                    isSelected ? "bg-accent text-accent-foreground border-accent" : ""
                                )}>
                                    {option.id}
                                </div>
                                <div className="prose-sm max-w-none" dangerouslySetInnerHTML={{ __html: marked(option.text) }}/>
                            </div>
                        )
                    })}
                </div>
            </CardContent>
            <CardFooter className="flex justify-between items-center border-t pt-6">
                <Button variant="outline" onClick={handleBack} disabled={currentQuestionIndex === 0}>
                    <ChevronLeft className="h-4 w-4 mr-2" />
                    Back
                </Button>

                {currentQuestionIndex < totalQuestions - 1 ? (
                    <Button onClick={handleNext} disabled={!selectedAnswers[currentQuestionIndex]}>
                        Next
                        <ChevronRight className="h-4 w-4 ml-2" />
                    </Button>
                ) : (
                    <Button onClick={handleSubmit} disabled={Object.keys(selectedAnswers).length !== totalQuestions}>
                        Finish Quiz
                    </Button>
                )}
            </CardFooter>
        </Card>
    );
}

# **App Name**: Nexus AI

## Core Features:

- Task Planner: Breaks down high-level goals into sequential, technical steps using the 'multiStepTaskExecution' flow.
- Proactive Issue Resolution: Formulates goals to resolve system alerts, triggered by the 'proactiveIssueResolution' flow.
- Task Self-Healing: Analyzes failed tasks and creates corrected plans using the 'taskSelfHealing' flow.
- RCA Report Generation: Generates Root Cause Analysis reports in Markdown format using the 'rcaReportGeneration' flow.
- Command Simulation: Simulates the output of shell commands using the 'commandSimulation' flow.
- Conversational Health Assistant: Answers user questions about system health using Genkit tools and querying Firestore data through the 'conversationalRca' flow, acting as a tool.
- Text-to-Speech: Converts text to speech using the Gemini TTS model via the 'tts' flow, providing audio data URI.
- Asynchronous Task Execution: Simulates task execution with status updates in Firestore and delays for UI visibility.
- Task Management: Includes creating, updating, and retrieving tasks, reports, and alerts from Firestore.

## Style Guidelines:

- Primary color: Deep sky blue (#42A5F5) to convey intelligence and trustworthiness.
- Background color: Very light blue (#F0F4F8), near-white background for a clean and professional interface.
- Accent color: Emerald green (#26A69A) for highlighting actions and key information.
- Headline font: 'Space Grotesk' sans-serif, for headlines and short amounts of body text.
- Body font: 'Inter' sans-serif, used for longer text, offering a neutral, modern look for readability.
- Code font: 'Source Code Pro' monospace, for code snippets within reports or simulation outputs.
- Use clean, minimalist icons to represent different task types and statuses.
- Employ a card-based layout to display tasks, alerts, and reports.
- Use subtle animations to indicate loading and status updates.
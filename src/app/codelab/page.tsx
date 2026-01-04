
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Code, Play, RefreshCw, Save, Terminal, Server, FileCode, Wind } from 'lucide-react';
import { FaPython, FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaDatabase, FaNodeJs } from 'react-icons/fa';
import { SiNextdotjs } from 'react-icons/si';

const languageIcons = [
    { name: "HTML", icon: <FaHtml5 className="h-6 w-6 text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="h-6 w-6 text-blue-500" /> },
    { name: "JS", icon: <FaJsSquare className="h-6 w-6 text-yellow-400" /> },
    { name: "React", icon: <FaReact className="h-6 w-6 text-cyan-400" /> },
    { name: "Next.js", icon: <SiNextdotjs className="h-6 w-6 text-white" /> },
    { name: "Python", icon: <FaPython className="h-6 w-6 text-blue-400" /> },
    { name: "C", icon: <span className="text-xl font-bold">C</span> },
    { name: "SQL", icon: <FaDatabase className="h-6 w-6 text-indigo-400" /> },
];

export default function CodeLabPage() {
  const sampleCode = `function welcome() {
    console.log("Welcome to the SCS Code Lab!");
}

welcome();
`;

  return (
    <div className="bg-black text-white min-h-screen flex flex-col font-mono">
      {/* Header */}
      <header className="flex items-center justify-between p-3 border-b border-gray-800 flex-shrink-0">
        <div className="flex items-center gap-3">
          <Code className="text-yellow-400 h-6 w-6" />
          <h1 className="text-xl font-bold font-space-grotesk">SCS Code Lab</h1>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm"><Save className="h-4 w-4 mr-2" />Save Snippet</Button>
          <Button variant="ghost" size="sm"><RefreshCw className="h-4 w-4 mr-2" />Reset to Path</Button>
          <Button className="bg-yellow-400 text-black hover:bg-yellow-500">
            <Play className="h-4 w-4 mr-2" />Run Code
          </Button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar */}
        <aside className="w-16 bg-gray-900 p-3 flex flex-col items-center gap-4 border-r border-gray-800">
          {languageIcons.map(lang => (
            <button key={lang.name} title={lang.name} className="p-2 rounded-lg hover:bg-gray-700 transition-colors">
              {lang.icon}
            </button>
          ))}
        </aside>

        {/* Main Content (Editor & Output) */}
        <main className="flex-1 flex flex-col p-4 gap-4">
          {/* Editor Pane */}
          <Card className="flex-1 bg-[#1E1E1E] border-gray-800 flex flex-col">
            <div className="p-2 border-b border-gray-700 text-gray-400 text-sm flex items-center gap-2">
                <FileCode className="h-4 w-4" />
                <span>script.js</span>
            </div>
            <CardContent className="p-4 flex-1">
              <pre><code className="language-javascript text-sm">{sampleCode}</code></pre>
            </CardContent>
          </Card>
          
          {/* Output/Preview Pane */}
          <div className="h-1/3 min-h-[200px]">
             <Tabs defaultValue="terminal" className="h-full flex flex-col">
                <TabsList className="bg-gray-900 border-b-0">
                    <TabsTrigger value="terminal">Terminal</TabsTrigger>
                    <TabsTrigger value="preview">Live Preview</TabsTrigger>
                </TabsList>
                <TabsContent value="terminal" className="flex-1 bg-[#1E1E1E] rounded-b-lg p-4 border border-t-0 border-gray-800">
                    <div className="flex items-center gap-2">
                        <Terminal className="h-5 w-5 text-gray-400" />
                        <p className="text-gray-400">Welcome to the SCS Code Lab!</p>
                    </div>
                     <p className="text-green-400">&gt; Node.js v18.12.1</p>
                </TabsContent>
                <TabsContent value="preview" className="flex-1 bg-white rounded-b-lg p-4 border border-t-0 border-gray-800">
                    <p className="text-black">Live preview for HTML/CSS, React, Next.js</p>
                </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>

       {/* Design Logic Section */}
      <footer className="p-8 border-t border-gray-800 bg-black">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-xl font-bold font-space-grotesk text-yellow-400 mb-2 flex items-center justify-center gap-2">
                <Server className="h-5 w-5" /> Infrastructure Choice
            </h3>
            <p className="text-gray-400">
                Optimized for browser-side execution to ensure zero-latency learning.
            </p>
          </div>
      </footer>
    </div>
  );
}

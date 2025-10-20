import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { useState } from 'react';

type Snippet = {
  id: string;
  title: string;
  code: string;
  description: string;
};

interface Props {
  snippets: Snippet[];
  timestamp: string;
}

export default function SnippetsGallery({ snippets, timestamp }: Props) {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Header */}
      <div className="border-b border-gray-700/50 backdrop-blur-sm bg-gray-900/50 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <Link 
            href="/" 
            className="text-blue-400 hover:text-blue-300 mb-3 inline-flex items-center gap-2 transition group"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
            Back to Playground
          </Link>
          <h1 className="text-4xl font-bold text-white mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Code Snippets Gallery
          </h1>
          <div className="flex items-center gap-3 text-sm">
            <span className="px-3 py-1 bg-green-500/10 text-green-400 rounded-full border border-green-500/20 font-medium">
              Pages Router
            </span>
            <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20 font-medium">
              SSR
            </span>
            <span className="text-gray-500">•</span>
            <span className="text-gray-400">
              Fetched at {new Date(timestamp).toISOString().slice(11, 19)} UTC
            </span>
          </div>
        </div>
      </div>

      {/* Snippets Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {snippets.map((snippet) => (
            <div 
              key={snippet.id}
              className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700/50 overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1"
            >
              {/* Card Header */}
              <div className="p-5 border-b border-gray-700/50 bg-gray-800/50">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition">
                  {snippet.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {snippet.description}
                </p>
              </div>
              
              {/* Code Preview */}
              <div className="bg-gray-950 p-5 relative">
                <div className="absolute top-3 right-3 flex gap-1">
                  <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                </div>
                <pre className="text-sm text-gray-300 max-h-64 overflow-y-auto overflow-x-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900 font-mono leading-relaxed">
                  <code>{snippet.code}</code>
                </pre>
              </div>

              {/* Card Actions */}
              <div className="p-4 flex gap-3 bg-gray-800/30">
                <button
                  onClick={() => copyToClipboard(snippet.code, snippet.id)}
                  className="flex-1 bg-gray-700/50 hover:bg-gray-700 text-white px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 border border-gray-600/50"
                >
                  {copiedId === snippet.id ? (
                    <>
                      <span>✓</span>
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <span>📋</span>
                      <span>Copy Code</span>
                    </>
                  )}
                </button>
                <Link
                  href={`/?snippet=${snippet.id}`}
                  className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-4 py-2.5 rounded-lg text-sm font-semibold text-center transition-all duration-200 hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20"
                >
                  <span>▶</span>
                  <span>Run Code</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Architecture Info Card */}
      <div className="max-w-7xl mx-auto px-6 pb-12">
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 border border-gray-700/50 shadow-2xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-2xl">
              🏗️
            </div>
            <h2 className="text-2xl font-bold text-white">Architecture Overview</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Pages Router */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-green-500/10 rounded-lg flex items-center justify-center border border-green-500/20">
                  <span className="text-green-400 font-bold">P</span>
                </div>
                <h3 className="font-bold text-green-400 text-lg">Pages Router</h3>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-0.5">✓</span>
                  <span><strong className="text-white">getServerSideProps</strong> for SSR data fetching</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-0.5">✓</span>
                  <span><strong className="text-white">API Routes</strong> (/api/snippets endpoint)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-0.5">✓</span>
                  <span><strong className="text-white">Traditional routing</strong> with file-based pages</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-0.5">✓</span>
                  <span><strong className="text-white">Server-side rendering</strong> on every request</span>
                </li>
              </ul>
            </div>

            {/* App Router */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center border border-blue-500/20">
                  <span className="text-blue-400 font-bold">A</span>
                </div>
                <h3 className="font-bold text-blue-400 text-lg">App Router</h3>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-0.5">✓</span>
                  <span><strong className="text-white">Client Components</strong> with 'use client' directive</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-0.5">✓</span>
                  <span><strong className="text-white">Monaco Editor</strong> integration for live coding</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-0.5">✓</span>
                  <span><strong className="text-white">Real-time execution</strong> with iframe sandboxing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-0.5">✓</span>
                  <span><strong className="text-white">Modern architecture</strong> with enhanced features</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mt-8 pt-8 border-t border-gray-700/50">
            <h4 className="text-sm font-semibold text-gray-400 mb-4">TECH STACK</h4>
            <div className="flex flex-wrap gap-2">
              {['Next.js 15', 'TypeScript', 'React 18', 'Tailwind CSS', 'Monaco Editor'].map(tech => (
                <span 
                  key={tech}
                  className="px-4 py-2 bg-gray-700/30 text-gray-300 rounded-lg text-sm font-medium border border-gray-600/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const snippets: Snippet[] = [
    {
      id: '1',
      title: 'Counter Component',
      code: `function Counter() {
  const [count, setCount] = React.useState(0);
  
  return (
    <div className="p-8 bg-blue-500 text-white rounded-lg">
      <h2 className="text-2xl mb-4">Count: {count}</h2>
      <button 
        onClick={() => setCount(count + 1)}
        className="bg-white text-blue-600 px-4 py-2 rounded"
      >
        Increment
      </button>
    </div>
  );
}`,
      description: 'Simple counter with state management'
    },
    {
      id: '2',
      title: 'Todo List',
      code: `function TodoList() {
  const [todos, setTodos] = React.useState(['Learn React', 'Build Projects']);
  const [input, setInput] = React.useState('');
  
  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, input]);
      setInput('');
    }
  };
  
  return (
    <div className="p-8 bg-purple-500 text-white rounded-lg">
      <h2 className="text-2xl mb-4">My Todos</h2>
      <div className="flex gap-2 mb-4">
        <input 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
          className="flex-1 px-3 py-2 rounded text-gray-800"
          placeholder="Add todo..."
        />
        <button 
          onClick={addTodo}
          className="bg-white text-purple-600 px-4 py-2 rounded font-semibold"
        >
          Add
        </button>
      </div>
      <ul className="space-y-2">
        {todos.map((todo, i) => (
          <li key={i} className="bg-purple-600 p-2 rounded">{todo}</li>
        ))}
      </ul>
    </div>
  );
}`,
      description: 'Interactive todo list with add functionality'
    },
    {
      id: '3',
      title: 'Color Picker',
      code: `function ColorPicker() {
  const [color, setColor] = React.useState('#3B82F6');
  
  return (
    <div className="p-8 rounded-lg" style={{ backgroundColor: color }}>
      <h2 className="text-2xl mb-4 text-white font-bold">Color Picker</h2>
      <input 
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        className="w-full h-20 rounded cursor-pointer"
      />
      <p className="mt-4 text-white font-mono text-lg">{color}</p>
    </div>
  );
}`,
      description: 'Dynamic color picker with live preview'
    }
  ];
  
  return {
    props: {
      snippets,
      timestamp: new Date().toISOString()
    }
  };
};
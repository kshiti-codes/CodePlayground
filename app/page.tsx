'use client';

import { useState } from 'react';
import Editor from '@monaco-editor/react';

const DEFAULT_CODE = `function WelcomeCard() {
  const [count, setCount] = React.useState(0);
  
  return (
    <div className="p-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-xl">
      <h1 className="text-3xl font-bold mb-4">Interactive Demo</h1>
      <p className="text-xl mb-4">Count: {count}</p>
      <button 
        onClick={() => setCount(count + 1)}
        className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100"
      >
        Increment
      </button>
    </div>
  );
}`;

export default function Home() {
  const [code, setCode] = useState(DEFAULT_CODE);
  const [error, setError] = useState('');

  const executeCode = () => {
    setError('');
    const iframe = document.getElementById('preview') as HTMLIFrameElement;
    if (!iframe?.contentWindow) return;
    // Extract the component name from the code
    const componentNameMatch = code.match(/function\s+([a-zA-Z_$][a-zA-Z0-9_$]*)/);
    const componentName = componentNameMatch ? componentNameMatch[1] : 'Demo';

    const fullCode = `
      <!DOCTYPE html>
      <html>
        <head>
          <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
          <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
          <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
          <script src="https://cdn.tailwindcss.com"></script>
          <style>body { margin: 0; padding: 20px; background: #f3f4f6; }</style>
        </head>
        <body>
          <div id="root"></div>
          <script type="text/babel">
            try {
              const { useState, useEffect } = React;
              
              ${code}
              
              const root = ReactDOM.createRoot(document.getElementById('root'));
              // Dynamically render the component using the extracted name
              root.render(React.createElement(${componentName}));
            } catch (error) {
              document.getElementById('root').innerHTML = '<div class="p-4 bg-red-100 text-red-700 rounded"><p class="font-bold">Error:</p><p>' + error.message + '</p></div>';
            }
          </script>
        </body>
      </html>
    `;

    iframe.srcdoc = fullCode;
  };

  return (
    <div className="h-screen flex flex-col bg-gray-900">
      {/* Header */}
      <div className="bg-gray-800 border-b border-gray-700 p-4 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-white">React Code Playground</h1>
          <p className="text-sm text-gray-400">Edit code • See live results • Built with Next.js App Router</p>
        </div>
        <a
          href="/snippets"
          className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded-lg font-semibold transition float-right mr-4 flex items-center gap-2"
        >
          📚 Browse Snippets
        </a>
        <button
          onClick={executeCode}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition"
        >
          ▶ Run Code
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Editor Panel */}
        <div className="w-1/2 border-r border-gray-700 flex flex-col">
          <div className="bg-gray-800 px-4 py-2 border-b border-gray-700">
            <span className="text-sm font-semibold text-gray-300">Editor (App Router)</span>
          </div>
          <Editor
            height="100%"
            defaultLanguage="javascript"
            theme="vs-dark"
            value={code}
            onChange={(value: string | undefined) => setCode(value ?? '')}
            options={{
              minimap: { enabled: false },
              fontSize: 14,
              lineNumbers: 'on',
              roundedSelection: false,
              scrollBeyondLastLine: false,
              automaticLayout: true,
            }}
          />
        </div>

        {/* Preview Panel */}
        <div className="w-1/2 flex flex-col bg-gray-100">
          <div className="bg-gray-800 px-4 py-2 border-b border-gray-700">
            <span className="text-sm font-semibold text-gray-300">Live Preview</span>
          </div>
          {error && (
            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
              <p className="font-bold">Error</p>
              <p className="text-sm">{error}</p>
            </div>
          )}
          <iframe
            id="preview"
            className="flex-1 w-full bg-white"
            sandbox="allow-scripts"
            title="Preview"
          />
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-800 border-t border-gray-700 px-4 py-2 text-center text-sm text-gray-400">
        Built with Next.js 15 • App Router • Monaco Editor • TypeScript
      </div>
    </div>
  );
}
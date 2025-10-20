# 🎮 Code Playground

A modern, interactive React code editor built with Next.js 15, demonstrating both **App Router** and **Pages Router** architectures. Write React code, see live results instantly, and explore pre-built component snippets.

![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)
![React](https://img.shields.io/badge/React-18-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8?logo=tailwindcss)

## ✨ Features

- **🎨 Live Code Editor** - Monaco Editor (VS Code's editor) with syntax highlighting
- **⚡ Real-time Preview** - Instant feedback with iframe sandbox execution
- **📚 Snippet Gallery** - Pre-built React components ready to run
- **🏗️ Hybrid Architecture** - Demonstrates both Next.js routing paradigms
- **🎯 TypeScript** - Fully typed for better developer experience
- **💅 Modern UI** - Beautiful gradients, animations, and responsive design

## 🏛️ Architecture

This project showcases **Next.js 15's hybrid routing capabilities**:

### App Router (`/`)
- **Client Components** with `'use client'` directive
- Monaco Editor integration for live coding
- Real-time code execution with iframe sandboxing
- Modern React patterns and hooks

### Pages Router (`/snippets`)
- **Server-Side Rendering (SSR)** with `getServerSideProps`
- Traditional Next.js data fetching patterns
- SEO-optimized snippet gallery

### API Routes (`/api/snippets`)
- RESTful API endpoints using Pages Router
- Supports fetching all snippets or individual by ID
- Shared data layer between both routing systems

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd code-playground
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:3000
   ```

## 📁 Project Structure

```
code-playground/
├── app/                          # App Router
│   ├── api/                      # API Route Handlers (if using App Router APIs)
│   ├── globals.css               # Global styles with Tailwind directives
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Main playground (Client Component)
│
├── pages/                        # Pages Router
│   ├── api/
│   │   └── snippets.ts          # API endpoint for snippets
│   ├── snippets.tsx             # Snippet gallery (SSR)
│   └── _app.tsx                 # Custom App component
│
├── public/                       # Static assets
├── tailwind.config.ts           # Tailwind configuration
├── tsconfig.json                # TypeScript configuration
└── package.json                 # Dependencies
```

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **Next.js 15** | React framework with hybrid routing |
| **React 18** | UI library with latest features |
| **TypeScript** | Type safety and better DX |
| **Tailwind CSS** | Utility-first styling |
| **Monaco Editor** | VS Code's editor component |
| **Babel Standalone** | Client-side JSX compilation |

## 📖 Usage

### Main Playground

1. Write or paste React component code in the editor
2. Click **"▶ Run Code"** to see live results
3. Edit and re-run as many times as you want

### Snippet Gallery

1. Click **"📚 Browse Snippets"** in the header
2. Browse pre-built React components
3. Click **"▶ Run Code"** to load any snippet in the playground
4. Click **"📋 Copy Code"** to copy snippet to clipboard

### Adding New Snippets

Edit `pages/api/snippets.ts` to add more snippets:

```typescript
{
  id: '4',
  title: 'Your Component',
  code: `function YourComponent() {
    // Your React code here
  }`,
  description: 'Description of your component'
}
```

## 🎯 Key Features Demonstrated

### Next.js App Router Features
- ✅ Client Components (`'use client'`)
- ✅ Modern file-based routing
- ✅ Enhanced developer experience
- ✅ Optimized bundle splitting

### Next.js Pages Router Features
- ✅ `getServerSideProps` for SSR
- ✅ API Routes (`/api/*`)
- ✅ Traditional data fetching patterns
- ✅ SEO-friendly server rendering

### React Best Practices
- ✅ Functional components with hooks
- ✅ Proper state management
- ✅ TypeScript for type safety
- ✅ Component composition
- ✅ Error handling

## 🎨 Customization

### Changing Theme Colors

Edit `tailwind.config.ts`:
```typescript
theme: {
  extend: {
    colors: {
      primary: '#your-color',
    }
  }
}
```

### Modifying Editor Settings

In `app/page.tsx`, update Monaco Editor options:
```typescript
options={{
  fontSize: 16,           // Change font size
  theme: 'vs-light',      // Light theme
  minimap: { enabled: true }, // Show minimap
}}
```

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Click "Deploy"

### Build for Production

```bash
npm run build
npm start
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework
- [Monaco Editor](https://microsoft.github.io/monaco-editor/) - VS Code's editor
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [React](https://react.dev/) - The library for web and native user interfaces

## 📧 Contact

**Kshiti Tushar Patel**
- Email: kshiti.de@gmail.com
- LinkedIn: [https://www.linkedin.com/in/kshitipatel1999/](https://www.linkedin.com/in/kshitipatel1999/)
- Portfolio: [https://kshitipatel.com/](https://kshitipatel.com/)

---

**Built with ❤️ using Next.js 15 | Demonstrates App Router + Pages Router Architecture**
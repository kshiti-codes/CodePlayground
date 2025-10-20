import type { NextApiRequest, NextApiResponse } from 'next';

type Snippet = {
  id: string;
  title: string;
  code: string;
  description: string;
};

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
    description: 'Simple counter with state'
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
    description: 'Interactive todo list'
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
    description: 'Pick and display colors'
  }
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Snippet[]>
) {
  res.status(200).json(snippets);
}
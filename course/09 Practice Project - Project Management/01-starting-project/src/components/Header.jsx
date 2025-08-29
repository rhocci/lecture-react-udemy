import Button from './Button.jsx';

export default function Header({ title = 'Untitled', date, desc }) {
  return (
    <header className="pb-4 mb-4 border-b-2 border-stone-300">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-stone-600 mb-2">{title}</h1>
        <Button variant="text">Delete</Button>
      </div>
      <p className="mb-4 text-stone-400">{date}</p>
      <p className="text-stone-600 whitespace-pre-wrap">{desc}</p>
    </header>
  );
}

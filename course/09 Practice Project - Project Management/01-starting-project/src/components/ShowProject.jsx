import Header from './Header.jsx';
import Button from './Button.jsx';

export default function ShowProject({ project }) {
  return (
    <>
      <Header />
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <div>
        <input className="w-64 mr-4 px-2 py-1 rounded-sm bg-stone-200" />
        <Button variant="text">Add Task</Button>
      </div>
      {/* <p className="mt-8">This project does not have any tasks yet.</p> */}
      <ul className="p-4 mt-8 rounded-md bg-stone-100">
        <li className="flex justify-between my-4">
          Learn the basics
          <Button variant="danger">Clear</Button>
        </li>
      </ul>
    </>
  );
}

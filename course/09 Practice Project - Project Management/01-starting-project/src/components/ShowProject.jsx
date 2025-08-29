import Header from './Header.jsx';
import Button from './Button.jsx';
import { useRef } from 'react';

export default function ShowProject({
  id,
  title,
  description,
  dueDate,
  tasks,
  handleAddTask,
}) {
  let newTask = useRef();

  return (
    <>
      <Header title={title} description={description} dueDate={dueDate} />
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <div>
        <input
          ref={newTask}
          className="w-64 mr-4 px-2 py-1 rounded-sm bg-stone-200"
        />
        <Button
          variant="text"
          onClick={() => handleAddTask(id, newTask.current.value)}
        >
          Add Task
        </Button>
      </div>
      {tasks.length === 0 ? (
        <p className="mt-8">This project does not have any tasks yet.</p>
      ) : (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {tasks.map((task) => (
            <li key={Date.now()} className="flex justify-between my-4">
              {task}
              <Button variant="danger">Clear</Button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

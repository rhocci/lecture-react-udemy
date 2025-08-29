import noProjects from '../assets/no-projects.png';
import Button from './Button';

export default function Empty({ handleChangeView }) {
  return (
    <div className="mt-24 text-center">
      <img src={noProjects} className="w-16 h-16 object-contain mx-auto" />
      <h2 className="text-xl font-bold text-stone-500 my-4">
        No Project Selected
      </h2>
      <p className="text-stone-400 mb-4">
        Select a project or get started with a new one
      </p>
      <p className="mt-8">
        <Button variant="primary" onClick={() => handleChangeView('add')}>
          Create new project
        </Button>
      </p>
    </div>
  );
}

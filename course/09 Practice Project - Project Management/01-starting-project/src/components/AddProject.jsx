import Input from './Input.jsx';
import Button from './Button.jsx';

export default function AddProject({ handleChangeView }) {
  return (
    <form className="mt-4 text-left">
      <menu className="flex items-center justify-end gap-4 my-4">
        <Button variant="text" onClick={() => handleChangeView('empty')}>
          Cancel
        </Button>
        <Button variant="secondary" onClick={() => handleChangeView('show')}>
          Save
        </Button>
      </menu>
      <Input type="text" label="Title" />
      <Input type="textarea" label="Description" />
      <Input type="date" label="Due Date" />
    </form>
  );
}

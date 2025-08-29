import Input from './Input.jsx';
import Button from './Button.jsx';

export function AddProject() {
  return (
    <form className="mt-4 text-left">
      <menu className="flex items-center justify-end gap-4 my-4">
        <Button variant="text">Cancel</Button>
        <Button variant="secondary">Save</Button>
      </menu>
      <p className="text-stone-600 mb-4">
        <Input type="text" label="Title" />
        <Input type="textarea" label="Description" />
        <Input type="date" label="Due Date" />
      </p>
    </form>
  );
}

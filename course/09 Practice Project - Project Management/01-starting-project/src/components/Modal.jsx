import { createPortal } from 'react-dom';

export default function Modal() {
  return createPortal(
    <dialog className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md"></dialog>,
    document.getElementById('modal-root')
  );
}

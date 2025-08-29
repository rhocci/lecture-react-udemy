import { createPortal } from 'react-dom';

export default function Modal() {
  return createPortal(
    <dialog className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById('modal-root')
  );
}

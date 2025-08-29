export default function Button({ variant = 'primary', children }) {
  const variants = {
    primary:
      'px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100',
    secondary:
      'px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950',
    nav: 'w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800',
    text: 'text-stone-700 hover:text-stone-950',
    danger: 'text-stone-700 hover:text-red-500',
  };

  return <button className={variants[variant]}>{children}</button>;
}

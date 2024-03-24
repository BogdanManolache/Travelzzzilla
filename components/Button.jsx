export default function Button({ children, type, onClick }) {
  let btnClass = '';
  if (type === 'primary') {
    btnClass =
      'rounded-full bg-orange-400 px-4 py-2 text-sm font-semibold tracking-wide text-slate-50 shadow duration-300 hover:bg-orange-500 hover:shadow-sm focus:outline-none focus-visible:ring focus-visible:ring-orange-200';
  }

  if (type === 'secondary') {
    btnClass =
      'rounded-md bg-slate-200 px-4 py-2 text-sm font-semibold tracking-wide duration-300 hover:bg-slate-800 hover:text-slate-50 focus:outline-none focus-visible:ring focus-visible:ring-slate-400 flex items-center justify-center gap-2 group';
  }

  return (
    <button className={btnClass} onClick={onClick}>
      {children}
    </button>
  );
}

export default function Button({ children }) {
  return (
    <button className="rounded-full bg-orange-400 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-slate-50 shadow duration-300 hover:bg-orange-500 hover:shadow-sm focus:outline-none focus-visible:ring focus-visible:ring-orange-200">
      {children}
    </button>
  );
}

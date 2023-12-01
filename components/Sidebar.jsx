import NavBar from './NavBar';

export default function Sidebar() {
  return (
    <aside className="col-span-2 col-start-1 row-span-1 row-start-2 flex items-center justify-center border-b-2 border-slate-200 sm:col-span-1 sm:col-start-2  sm:row-start-1  md:col-span-1 md:col-start-1 md:row-span-1 md:row-start-2  md:border-b-0 md:border-r-2">
      <NavBar />
    </aside>
  );
}

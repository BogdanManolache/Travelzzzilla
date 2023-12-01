export default function Footer() {
  return (
    <footer className="col-span-2 flex items-center justify-center border-t-2 md:border-none">
      <p className="text-sm font-light text-slate-700">
        &copy; Travelzilla, Inc. {new Date().getFullYear()}
      </p>
    </footer>
  );
}

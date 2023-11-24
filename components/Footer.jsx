export default function Footer() {
  return (
    <footer className="col-span-2 flex items-center justify-center">
      <p className="text-sm font-light text-slate-700">
        Copyright&copy; <strong>Travelzilla</strong> {new Date().getFullYear()}{' '}
      </p>
    </footer>
  );
}

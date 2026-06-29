export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
        <p>© 2026 HitBrand Media. All rights reserved.</p>
        <div className="flex flex-wrap gap-6">
          <a href="#" className="hover:text-white">Instagram</a>
          <a href="#" className="hover:text-white">LinkedIn</a>
          <a href="mailto:hello@hitbrandmedia.com" className="hover:text-white">hello@hitbrandmedia.com</a>
        </div>
      </div>
    </footer>
  );
}

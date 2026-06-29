import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-40 pb-24">
      <div className="absolute left-1/2 top-24 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-600/20 blur-3xl" />
      <div className="absolute right-0 top-40 h-96 w-96 rounded-full bg-sky-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-5xl">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.35em] text-blue-400">
            Branding • Websites • Growth
          </p>

          <h1 className="max-w-5xl text-5xl font-black tracking-tight text-white md:text-8xl">
            We build brands people can’t ignore.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
            HitBrand Media helps ambitious businesses grow with premium branding,
            high-converting websites, social media, paid ads, SEO, and AI-powered
            marketing systems.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href="#contact">Get Free Strategy Call</Button>
            <Button href="#services" variant="secondary">Explore Services</Button>
          </div>
        </div>

        <div className="mt-20 grid gap-5 md:grid-cols-3">
          {[
            ["Strategy", "A clear positioning system before we design anything."],
            ["Design", "Premium visual systems that make your business feel trusted."],
            ["Growth", "Websites, content, SEO, and ads built to bring leads."],
          ].map(([title, text]) => (
            <div key={title} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <p className="text-lg font-semibold text-white">{title}</p>
              <p className="mt-3 text-sm leading-6 text-slate-400">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

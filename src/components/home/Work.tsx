import { workItems } from "@/data/work";

export default function Work() {
  return (
    <section id="work" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            Selected Work
          </p>
          <h2 className="text-4xl font-black tracking-tight text-white md:text-6xl">
            Built to make brands look established from day one.
          </h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {workItems.map((item, index) => (
            <article key={item.title} className="min-h-80 rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-7">
              <div className="mb-16 flex items-center justify-between text-sm text-slate-400">
                <span>{item.category}</span>
                <span>0{index + 1}</span>
              </div>
              <h3 className="text-2xl font-bold text-white">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-400">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

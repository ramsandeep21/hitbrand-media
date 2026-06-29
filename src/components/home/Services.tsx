import { services } from "@/data/services";

export default function Services() {
  return (
    <section id="services" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            What We Do
          </p>
          <h2 className="text-4xl font-black tracking-tight text-white md:text-6xl">
            Marketing services built for modern businesses.
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-400">
            Every service is designed to help your business look sharper, earn more trust,
            and convert more customers.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="group rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition hover:-translate-y-1 hover:border-blue-500/50 hover:bg-white/[0.06]"
            >
              <p className="text-sm font-semibold text-blue-400">{service.eyebrow}</p>
              <h3 className="mt-3 text-xl font-bold text-white">{service.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-400">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

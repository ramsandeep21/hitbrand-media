const plans = [
  { name: "Starter", price: "$299+", text: "Best for new businesses that need a premium foundation." },
  { name: "Growth", price: "$699+", text: "Best for businesses ready for consistent content and lead generation." },
  { name: "Premium", price: "Custom", text: "Best for brands that need full strategy, website, ads, and automation." },
];

export default function Pricing() {
  return (
    <section id="pricing" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">Packages</p>
          <h2 className="text-4xl font-black tracking-tight text-white md:text-6xl">Start small. Scale when ready.</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {plans.map((plan) => (
            <div key={plan.name} className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
              <h3 className="text-xl font-bold text-white">{plan.name}</h3>
              <p className="mt-5 text-4xl font-black text-white">{plan.price}</p>
              <p className="mt-5 text-sm leading-7 text-slate-400">{plan.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

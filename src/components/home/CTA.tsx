import Button from "@/components/ui/Button";

export default function CTA() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-blue-600 px-8 py-16 text-center">
        <h2 className="text-4xl font-black tracking-tight text-white md:text-6xl">
          Ready to make your brand impossible to ignore?
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">
          Tell us what you're building. We'll help you shape the brand, website,
          and marketing system to grow it.
        </p>
        <div className="mt-10">
          <Button href="mailto:hello@hitbrandmedia.com" variant="light">
            Start Your Project
          </Button>
        </div>
      </div>
    </section>
  );
}

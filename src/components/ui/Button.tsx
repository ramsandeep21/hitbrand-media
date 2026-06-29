import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "light";
  className?: string;
};

export default function Button({ href, children, variant = "primary", className }: ButtonProps) {
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-500",
    secondary: "border border-white/15 text-slate-200 hover:bg-white/10",
    light: "bg-white text-blue-700 hover:bg-blue-50",
  };

  return (
    <a
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold transition",
        variants[variant],
        className
      )}
    >
      {children}
    </a>
  );
}

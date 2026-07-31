export default function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-accent">
      {children}
    </p>
  );
}

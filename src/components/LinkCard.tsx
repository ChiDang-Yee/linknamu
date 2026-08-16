type LinkCardProps = {
  label: string;
  href: string;
};

export default function LinkCard({ label, href }: LinkCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex w-full items-center justify-center rounded-2xl border border-white/60 bg-white/45 px-5 py-3.5 text-sm font-medium text-stone-700 shadow-[0_4px_18px_-6px_rgba(120,70,30,0.18)] backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/65 hover:shadow-[0_8px_22px_-6px_rgba(120,70,30,0.24)] dark:border-white/10 dark:bg-white/5 dark:text-stone-100 dark:hover:bg-white/10"
    >
      {label}
    </a>
  );
}

type LinkCardProps = {
  label: string;
  href: string;
  clickCount: number;
  onClick?: () => void;
};

export default function LinkCard({ label, href, clickCount, onClick }: LinkCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className="flex w-full items-center justify-between gap-3 rounded-2xl border border-white/60 bg-white/45 px-5 py-3.5 text-sm font-medium text-stone-700 shadow-[0_4px_18px_-6px_rgba(120,70,30,0.18)] backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/65 hover:shadow-[0_8px_22px_-6px_rgba(120,70,30,0.24)] dark:border-white/10 dark:bg-white/5 dark:text-stone-100 dark:hover:bg-white/10"
    >
      <span className="flex-1 text-center">{label}</span>
      <span className="text-xs font-normal text-stone-400 dark:text-stone-500">
        {clickCount}회
      </span>
    </a>
  );
}

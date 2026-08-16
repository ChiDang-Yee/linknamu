type ProfileHeaderProps = {
  name: string;
  bio: string;
  avatarUrl?: string;
};

export default function ProfileHeader({ name, bio, avatarUrl }: ProfileHeaderProps) {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <div className="rounded-full bg-gradient-to-br from-white/90 to-orange-100/50 p-1.5 shadow-[0_10px_28px_-8px_rgba(180,100,40,0.35)] dark:from-white/10 dark:to-white/0">
        <div className="h-32 w-32 overflow-hidden rounded-full bg-zinc-100 shadow-inner ring-1 ring-black/5 dark:bg-zinc-800 dark:ring-white/10">
          {avatarUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={avatarUrl} alt={name} className="h-full w-full object-cover" />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-3xl font-semibold text-zinc-400 dark:text-zinc-500">
              {name.slice(0, 1)}
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        <h1 className="text-xl font-bold tracking-tight text-stone-800 dark:text-stone-50">
          {name}
        </h1>
        <p className="max-w-[230px] text-sm leading-relaxed text-stone-500 dark:text-stone-300">
          {bio}
        </p>
      </div>
    </div>
  );
}

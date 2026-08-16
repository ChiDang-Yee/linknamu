type ProfileHeaderProps = {
  name: string;
  bio: string;
  avatarUrl?: string;
};

export default function ProfileHeader({ name, bio, avatarUrl }: ProfileHeaderProps) {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <div className="h-32 w-32 overflow-hidden rounded-full border border-black/10 bg-zinc-100 dark:border-white/10 dark:bg-zinc-800">
        {avatarUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={avatarUrl} alt={name} className="h-full w-full object-cover" />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-3xl font-semibold text-zinc-400 dark:text-zinc-500">
            {name.slice(0, 1)}
          </div>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <h1 className="text-lg font-bold text-zinc-900 dark:text-zinc-50">{name}</h1>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">{bio}</p>
      </div>
    </div>
  );
}

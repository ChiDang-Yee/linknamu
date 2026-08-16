import ProfileHeader from "@/components/ProfileHeader";
import LinkCard from "@/components/LinkCard";

const profile = {
  name: "홍길동",
  bio: "나는 하늘을 난다",
};

const links = [
  { label: "GitHub", href: "https://github.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Blog", href: "https://example.com" },
];

export default function Home() {
  return (
    <div className="flex flex-1 items-center justify-center bg-zinc-50 px-4 py-10 dark:bg-black">
      <main className="flex w-full max-w-xs flex-col items-center gap-8 rounded-3xl border border-zinc-200 bg-white px-6 py-10 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
        <ProfileHeader name={profile.name} bio={profile.bio} />
        <div className="flex w-full flex-col gap-3">
          {links.map((link) => (
            <LinkCard key={link.label} label={link.label} href={link.href} />
          ))}
        </div>
      </main>
    </div>
  );
}

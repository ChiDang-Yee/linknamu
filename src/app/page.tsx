import ProfileHeader from "@/components/ProfileHeader";
import LinkList from "@/components/LinkList";

const profile = {
  name: "김C발",
  bio: "풀스택 개발자 | 요즘에는 AI 개발에 관심이 많아요",
  avatarUrl: "/gagamel.png",
};

const links = [
  { id: "github", label: "GitHub", href: "https://github.com" },
  { id: "linkedin", label: "LinkedIn", href: "https://linkedin.com" },
  { id: "blog", label: "Blog", href: "https://example.com" },
];

export default function Home() {
  return (
    <div className="flex flex-1 items-center justify-center bg-gradient-to-b from-[#fdf6ec] via-[#fdecdb] to-[#ffe1c7] px-6 py-16 sm:py-20 dark:from-[#1c1512] dark:via-[#241a15] dark:to-[#2c1f17]">
      <main className="flex w-full max-w-xs flex-col items-center gap-10">
        <ProfileHeader name={profile.name} bio={profile.bio} avatarUrl={profile.avatarUrl} />
        <LinkList links={links} />
      </main>
    </div>
  );
}

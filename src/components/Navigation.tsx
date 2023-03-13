import Link from "next/link";

export default function Navigation() {
  return (
    <nav>
      <div className="py-6 px-6 my-6 text-3xl font-bold bg-orange-500 text-white rounded-md">
        Hacker News
      </div>
      <div className="flex flex-row gap-2 justify-start my-5">
        {navButtons.map(({ text, link }, ind) => (
          <Link key={ind} href={link} className="text-white font-bold">
            {text}
          </Link>
        ))}
      </div>
    </nav>
  );
}

const navButtons = [
  { text: "Top", link: "/top" },
  { text: "Best", link: "/best" },
  { text: "New", link: "/new" },
  { text: "Show HN", link: "/show" },
  { text: "Ask HN", link: "/ask" },
  { text: "Jobs", link: "/jobs" },
];

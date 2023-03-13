import Link from "next/link";

export default function Footer() {
  const linkStyle = "";

  return (
    <div className="flex flex-row gap-2 my-6 justify-center">
      {footerLinks.map(({ text, link }, ind) => (
        <Link key={ind} href={link} className='text-white'>{text}</Link>
      ))}
    </div>
  );
}

const footerLinks = [
  { text: "Guidelines", link: "#" },
  { text: "FAQ", link: "" },
  { text: "Lists", link: "" },
  { text: "API", link: "" },
  { text: "Security", link: "" },
  { text: "Legal", link: "" },
  { text: "Apply to YC", link: "" },
  { text: "Contact", link: "" },
];

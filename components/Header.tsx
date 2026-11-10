import Link from "next/link";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/about", label: "À propos" },
  { href: "https://github.com/PaulKbidi", label: "Projets"},
  { href: "/contact", label: "Contact" },
  { href: "/curriculum_vitae", label: "Curriculum Vitae" },
];

export default function Header() {
  return (
    <header className="border-b border-neutral-200">
      <nav className="mx-auto flex max-w-5xl items-center justify-between p-4">
        <Link href="/" className="font-semibold">Paul K/BIDI</Link>
        <div className="flex items-center gap-6">
          <ul className="flex gap-6 text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  target={l.href.startsWith("https://") ? "_blank" : undefined}
                  rel={l.href.startsWith("https://") ? "noopener noreferrer" : undefined}
                  className="hover:underline"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
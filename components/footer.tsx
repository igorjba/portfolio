import { footer, profile, type Lang } from "@/content/site";

export function Footer({ lang }: { lang: Lang }) {
  return (
    <footer className="border-t border-line/60 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div className="space-y-1.5">
          <p className="font-mono text-xs text-dust-2">
            © {new Date().getFullYear()} {profile.name}
          </p>
          <p className="text-xs text-dust-2">{footer.built[lang]}</p>
        </div>

        <nav className="flex flex-wrap items-center gap-x-6 gap-y-2" aria-label="footer">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-dust transition-colors duration-300 hover:text-bone"
          >
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-dust transition-colors duration-300 hover:text-bone"
          >
            LinkedIn
          </a>
          <a
            href={`${profile.github}/portfolio`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-dust transition-colors duration-300 hover:text-bone"
          >
            {footer.source[lang]}
          </a>
          <a href="#" className="text-sm text-dust transition-colors duration-300 hover:text-bone">
            {footer.top[lang]} ↑
          </a>
        </nav>
      </div>
    </footer>
  );
}

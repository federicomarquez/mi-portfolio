import Link from "next/link";

type ProjectCardProps = {
  slug: string;
  title: string;
  description: string;
  stack: string[];
  githubUrl?: string;
  liveUrl?: string;
};

export function ProjectCard({
  slug,
  title,
  description,
  stack,
  githubUrl,
  liveUrl,
}: ProjectCardProps) {
  return (
    <article className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05]">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>

      <p className="mt-4 leading-7 text-[var(--muted)]">{description}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {stack.map((item) => (
          <span
            key={item}
            className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-300 transition group-hover:border-white/20"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-4 text-sm">
        <Link
          href={`/projects/${slug}`}
          className="text-white transition hover:text-[var(--accent)]"
        >
          Ver detalle
        </Link>

        {githubUrl ? (
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="text-white transition hover:text-[var(--accent)]"
          >
            GitHub
          </a>
        ) : null}

        {liveUrl ? (
          <a
            href={liveUrl}
            target="_blank"
            rel="noreferrer"
            className="text-white transition hover:text-[var(--accent)]"
          >
            Demo
          </a>
        ) : null}
      </div>
    </article>
  );
}
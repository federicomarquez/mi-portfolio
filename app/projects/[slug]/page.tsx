import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { projects } from "@/data/projects";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
        <article className="mx-auto max-w-4xl px-6 pb-24 pt-32">
          <p className="text-sm uppercase tracking-[0.25em] text-[var(--accent)]">
            Proyecto
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            {project.title}
          </h1>

          <p className="mt-6 text-lg leading-8 text-[var(--muted)]">
            {project.longDescription}
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            {project.stack.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-zinc-200"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/10 bg-black px-5 py-3 text-sm font-medium text-white transition hover:border-white/20 hover:bg-white/5"
            >
              Ver GitHub
            </a>

            <Link
              href="/projects"
              className="rounded-xl border border-white/10 bg-black px-5 py-3 text-sm font-medium text-white transition hover:border-white/20 hover:bg-white/5"
            >
              Volver a proyectos
            </Link>
          </div>
        </article>
      </main>
    </>
  );
}
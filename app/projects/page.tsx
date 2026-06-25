import { Navbar } from "@/components/navbar";
import { ProjectCard } from "@/components/project-card";
import { SectionTitle } from "@/components/section-title";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
        <section className="mx-auto max-w-5xl px-6 pb-24 pt-32">
          <SectionTitle
            eyebrow="Proyectos"
            title="Proyectos y experiencias"
            description="Una selección de trabajos donde apliqué distintas tecnologías, abordando frontend, backend, bases de datos, testing e integración."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard
                key={project.slug}
                slug={project.slug}
                title={project.title}
                description={project.description}
                stack={project.stack}
                githubUrl={project.githubUrl}
                liveUrl={project.liveUrl}
              />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
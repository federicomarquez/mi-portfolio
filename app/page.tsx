import { Navbar } from "@/components/navbar";
import { ProjectCard } from "@/components/project-card";
import { SectionTitle } from "@/components/section-title";
import { SkillBadge } from "@/components/skill-badge";
import { projects } from "@/data/projects";

const skills = [
  "TypeScript",
  "JavaScript",
  "Kotlin",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Spring Boot",
  "Spring Security",
  "JWT",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "Docker",
  "GitHub Actions",
  "JUnit 5",
  "Kotest",
  "Testcontainers",
];

const teachingRoles = [
  {
    subject: "Estrategias de Persistencia (PHM)",
    university: "UNSAM — Universidad Nacional de San Martín",
    period: "Agosto 2025 — presente",
    description:
      "Tutor en la materia de persistencia políglota. Realizo seguimiento de trabajos prácticos donde los alumnos integran múltiples bases de datos simultáneamente (PostgreSQL, MongoDB, Redis, Neo4j) mediante Docker. En las entregas evalúo comprensión teórica y revisión de código, haciendo preguntas conceptuales y analizando las implementaciones junto a cada grupo.",
    tags: ["PostgreSQL", "MongoDB", "Redis", "Neo4j", "Docker", "Spring Boot", "Kotlin"],
  },
  {
    subject: "Algoritmos 3 — Interfaces de Usuario",
    university: "UNSAM — Universidad Nacional de San Martín",
    period: "Agosto 2025 — presente",
    description:
      "Tutor en la materia de interfaces de usuario. Acompaño a los alumnos en el desarrollo de sus trabajos prácticos con tecnologías frontend modernas. Realizo correcciones, seguimiento y devoluciones sobre diseño de componentes, arquitectura de UI y buenas prácticas de desarrollo.",
    tags: ["React", "Svelte", "Angular", "HTML", "CSS", "JavaScript", "TypeScript"],
  },
];

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="relative min-h-screen overflow-x-hidden bg-[var(--background)] text-[var(--foreground)]">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.12),transparent_35%)]" />

        <section className="mx-auto flex min-h-screen max-w-5xl items-center px-6 pt-16">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm uppercase tracking-[0.25em] text-[var(--accent)]">
              Portfolio
            </p>

            <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
              Federico Márquez
            </h1>

            <p className="mt-4 text-lg font-medium text-zinc-200 sm:text-xl">
              Desarrollador de Software
            </p>

            <p className="mt-6 text-base leading-8 text-[var(--muted)] sm:text-lg">
              Trabajo en desarrollo full stack con foco en backend, bases de
              datos y testing. También soy tutor universitario en la UNSAM, donde
              acompaño proyectos de persistencia políglota e interfaces de
              usuario. Me interesa construir software bien hecho y seguir
              creciendo en equipos con cultura técnica sólida.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/projects"
                className="rounded-xl border border-white/10 bg-black px-5 py-3 text-sm font-medium text-white transition hover:border-white/20 hover:bg-white/5"
              >
                Ver proyectos
              </a>

              <a
                href="#contact"
                className="rounded-xl border border-[var(--border)] px-5 py-3 text-sm font-medium text-white transition hover:bg-white/5"
              >
                Contacto
              </a>
            </div>
          </div>
        </section>

        <section
          id="about"
          className="mx-auto max-w-5xl border-t border-white/5 px-6 py-24"
        >
          <SectionTitle
            eyebrow="Sobre mí"
            title="Formación técnica, desarrollo full stack y docencia universitaria"
            description="Soy Técnico Universitario en Programación Informática (UNSAM). Participé en proyectos donde trabajé en distintas capas del stack — interfaces, APIs, lógica de negocio, persistencia y contenedores. Además soy tutor universitario en materias de persistencia políglota e interfaces de usuario, donde acompaño a estudiantes en el desarrollo de sus proyectos, corrección de código y evaluación conceptual."
          />
        </section>

        <section
          id="teaching"
          className="mx-auto max-w-5xl border-t border-white/5 px-6 py-24"
        >
          <SectionTitle
            eyebrow="Experiencia"
            title="Docencia universitaria en la UNSAM"
            description="Desde agosto de 2025 soy tutor en dos materias de la Universidad Nacional de San Martín, acompañando a estudiantes en el desarrollo de proyectos con tecnologías modernas."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {teachingRoles.map((role) => (
              <article
                key={role.subject}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05]"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
                  Tutor
                </p>
                <h3 className="mt-2 text-lg font-semibold text-white">
                  {role.subject}
                </h3>
                <p className="mt-1 text-sm text-zinc-400">{role.university}</p>
                <p className="mt-1 text-xs text-zinc-500">{role.period}</p>

                <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                  {role.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {role.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-300 transition hover:border-white/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-5xl border-t border-white/5 px-6 py-24">
          <SectionTitle
            eyebrow="Tecnologías"
            title="Herramientas con las que trabajo"
          />

          <div className="mt-10 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <SkillBadge key={skill} label={skill} />
            ))}
          </div>
        </section>

        <section
          id="projects"
          className="mx-auto max-w-5xl border-t border-white/5 px-6 py-24"
        >
          <SectionTitle
            eyebrow="Proyectos"
            title="Experiencias donde apliqué distintas tecnologías"
            description="Estos proyectos me permitieron trabajar sobre frontend, backend, persistencia, testing, integración y arquitectura de software."
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

        <section
          id="learning"
          className="mx-auto max-w-5xl border-t border-white/5 px-6 py-24"
        >
          <SectionTitle
            eyebrow="Aprendizaje"
            title="Siempre construyendo algo nuevo"
            description="Sigo profundizando en TypeScript, Next.js y arquitectura de software. Me interesa entender bien los sistemas que construyo — no solo que funcionen, sino por qué funcionan."
          />
        </section>

        <section
          id="contact"
          className="mx-auto max-w-5xl border-t border-white/5 px-6 py-24"
        >
          <SectionTitle
            eyebrow="Contacto"
            title="Hablemos"
            description="Estoy disponible para nuevas oportunidades en desarrollo de software. Si tenés un proyecto interesante o querés charlar, escribime."
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <a
              href="https://github.com/federicomarquez"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-white/20 hover:bg-white/[0.05]"
            >
              <p className="text-sm text-zinc-400">GitHub</p>
              <p className="mt-2 text-sm font-medium text-white">
                github.com/federicomarquez
              </p>
            </a>

            <a
              href="https://www.linkedin.com/in/federico-marquez-/"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-white/20 hover:bg-white/[0.05]"
            >
              <p className="text-sm text-zinc-400">LinkedIn</p>
              <p className="mt-2 text-sm font-medium text-white">
                linkedin.com/in/federico-marquez-
              </p>
            </a>

            <a
              href="mailto:fedemv93@gmail.com"
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-white/20 hover:bg-white/[0.05]"
            >
              <p className="text-sm text-zinc-400">Email</p>
              <p className="mt-2 text-sm font-medium text-white">
                fedemv93@gmail.com
              </p>
            </a>
          </div>
        </section>
      </main>
    </>
  );
}

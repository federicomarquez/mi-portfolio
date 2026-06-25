import { Navbar } from "@/components/navbar";
import { ProjectCard } from "@/components/project-card";
import { SectionTitle } from "@/components/section-title";
import { SkillBadge } from "@/components/skill-badge";
import { projects } from "@/data/projects";

const skillGroups = [
  {
    title: "Lenguajes",
    items: ["JavaScript", "TypeScript", "Kotlin", "Java", "SQL"],
  },
  {
    title: "Frontend",
    items: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Material UI",
      "React Router",
      "Axios",
      "HTML",
      "CSS",
    ],
  },
  {
    title: "Backend",
    items: [
      "Spring Boot",
      "Spring Web",
      "Spring Data JPA",
      "REST APIs",
      "Spring Security",
      "JWT",
    ],
  },
  {
    title: "Bases de datos",
    items: ["PostgreSQL", "MongoDB", "Redis"],
  },
  {
    title: "Testing y herramientas",
    items: [
      "JUnit 5",
      "Kotest",
      "MockK",
      "Testcontainers",
      "Jacoco",
      "Docker",
      "Docker Compose",
      "Git",
      "GitHub",
      "GitHub Actions",
      "Gradle",
    ],
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
              Desarrollador de Software Junior
            </p>

            <p className="mt-6 text-base leading-8 text-[var(--muted)] sm:text-lg">
              Tengo formación en programación informática y experiencia en
              proyectos full stack donde trabajé con frontend, backend, bases de
              datos, testing e infraestructura. Me interesa seguir creciendo
              profesionalmente, aportar en equipos de desarrollo y construir
              soluciones sólidas con tecnologías modernas.
            </p>

            <div className="mt-6 inline-flex rounded-full border border-[var(--border)] bg-white/[0.03] px-4 py-2 text-sm text-zinc-300">
              Disponible para oportunidades junior, trainee o primer empleo IT
            </div>

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
            title="Formación técnica y experiencia en desarrollo full stack"
            description="Soy Técnico Universitario en Programación Informática y participé en proyectos donde trabajé en distintas capas del desarrollo de software, desde interfaces y consumo de APIs hasta lógica de negocio, persistencia de datos y entornos con contenedores. Me interesa insertarme en el mercado IT, seguir aprendiendo en proyectos reales y aportar valor en roles de desarrollo frontend, backend o full stack."
          />
        </section>

        <section className="mx-auto max-w-5xl border-t border-white/5 px-6 py-24">
          <SectionTitle
            eyebrow="Tecnologías"
            title="Herramientas y tecnologías con las que trabajé"
            description="Estas son algunas de las tecnologías con las que tengo experiencia a través de proyectos académicos y prácticos."
          />

          <div className="mt-12 space-y-8">
            {skillGroups.map((group) => (
              <div key={group.title}>
                <h3 className="mb-4 text-lg font-semibold text-white">
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {group.items.map((item) => (
                    <SkillBadge key={item} label={item} />
                  ))}
                </div>
              </div>
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
            title="Sigo ampliando mi perfil para insertarme en el mercado IT"
            description="Actualmente sigo fortaleciendo mis bases en TypeScript, Next.js y desarrollo de interfaces modernas, mientras consolido conocimientos en backend, testing, bases de datos y buenas prácticas de desarrollo. Me enfoco en aprender construyendo proyectos reales y en desarrollar un perfil versátil para distintos roles dentro del desarrollo de software."
          />
        </section>

        <section
          id="contact"
          className="mx-auto max-w-5xl border-t border-white/5 px-6 py-24"
        >
          <SectionTitle
            eyebrow="Contacto"
            title="Estoy buscando mi primera oportunidad en tecnología"
            description="Estoy abierto a oportunidades junior, trainee o de primer empleo en desarrollo de software. Me interesa sumarme a equipos donde pueda aprender, aportar y seguir creciendo profesionalmente."
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
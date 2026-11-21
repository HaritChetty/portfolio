import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "../../../data/content";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="project-page fade-in">
      <article className="project-shell">
        <Link href="/#projects" className="back-link" aria-label="Back to projects">
          ← Back
        </Link>
        <header className="project-hero-detail">
          <p className="kicker project-kicker">
            <span>{project.eyebrow}</span>
            <span>{project.year}</span>
          </p>
          <div className="project-title-row">
            <h1>{project.title}</h1>
            {project.links[0] && (
              <a
                href={project.links[0].href}
                target="_blank"
                rel="noreferrer"
                className="ghost-button"
              >
                GitHub <span aria-hidden="true">↗</span>
              </a>
            )}
          </div>
          <p>{project.summary}</p>
        </header>

        <section className="case-section">
          <span className="detail-label">Overview</span>
          <p>{project.details}</p>
        </section>
      </article>
    </main>
  );
}

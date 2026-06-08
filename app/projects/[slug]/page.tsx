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
          <p className="kicker">{project.eyebrow}</p>
          <h1>{project.title}</h1>
          <p>{project.summary}</p>
        </header>

        <section className="detail-grid">
          <div>
            <span className="detail-label">Role</span>
            <p>{project.role}</p>
          </div>
          <div>
            <span className="detail-label">Year</span>
            <p>{project.year}</p>
          </div>
          <div>
            <span className="detail-label">Stack</span>
            <p>{project.stack.join(" · ")}</p>
          </div>
          <div>
            <span className="detail-label">Links</span>
            <p>
              {project.links.map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                  {link.label}
                </a>
              ))}
            </p>
          </div>
        </section>

        <section className="case-section">
          <span className="detail-label">Overview</span>
          <p>{project.details}</p>
        </section>

        <section className="case-section demo-panel">
          <span className="detail-label">Demo in progress...</span>
          {/* <p>{project.demo}</p> */}
        </section>
      </article>
    </main>
  );
}

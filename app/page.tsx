import { ProjectRow } from "../components/ProjectRow";
import { TimelineItem } from "../components/TimelineItem";
import { education, projects, site, work } from "../data/content";

export default function Home() {
  return (
    <main id="top" className="page fade-in">
      <section className="hero shell">
        <p className="kicker">{site.location}</p>
        <h1>{site.name}</h1>
        <p className="intro">{site.intro}</p>
        <p className="sub-intro">{site.subIntro}</p>
        <div className="intro-links" aria-label="Profile links">
          {site.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
            >
              {link.label}
            </a>
          ))}
        </div>
      </section>

      <section id="projects" className="section shell">
        <div className="section-heading">
          <span>01</span>
          <h2>Projects</h2>
        </div>
        <div className="project-list">
          {projects.map((project, index) => (
            <ProjectRow key={project.slug} index={index} {...project} />
          ))}
        </div>
      </section>

      <section id="work" className="section shell">
        <div className="section-heading">
          <span>02</span>
          <h2>Work</h2>
        </div>
        <div className="timeline">
          {work.map((item) => (
            <TimelineItem key={`${item.title}-${item.time}`} {...item} />
          ))}
        </div>
      </section>

      <section id="education" className="section shell last-section">
        <div className="section-heading">
          <span>03</span>
          <h2>Education</h2>
        </div>
        <div className="timeline">
          {education.map((item) => (
            <TimelineItem key={`${item.title}-${item.time}`} {...item} />
          ))}
        </div>
      </section>
    </main>
  );
}

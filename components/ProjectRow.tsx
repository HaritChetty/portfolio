import Link from "next/link";

type ProjectRowProps = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  year: string;
  index: number;
};

export function ProjectRow({ slug, title, eyebrow, summary, year, index }: ProjectRowProps) {
  return (
    <Link className="project-row" href={`/projects/${slug}`}>
      <span className="project-index">{String(index + 1).padStart(2, "0")}</span>
      <span className="project-main">
        <span className="project-title">{title}</span>
        <span className="project-summary">{summary}</span>
      </span>
      <span className="project-meta">
        <span>{eyebrow}</span>
        <span>{year}</span>
      </span>
    </Link>
  );
}

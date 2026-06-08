type TimelineItemProps = {
  title: string;
  place: string;
  time: string;
  note: string;
};

export function TimelineItem({ title, place, time, note }: TimelineItemProps) {
  return (
    <article className="timeline-item">
      <div>
        <h3>{title}</h3>
        <p>{place}</p>
      </div>
      <div>
        <time>{time}</time>
        <p>{note}</p>
      </div>
    </article>
  );
}

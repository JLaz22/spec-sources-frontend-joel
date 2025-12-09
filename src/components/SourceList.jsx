import SourceRow from "./SourceRow";

export default function SourceList({ sources, onDelete }) {
  return (
    <div className="list">
      {sources.map((s, idx) => (
        <SourceRow
          key={s.id}
          index={idx + 1}
          id={s.id}
          name={s.name}
          email={s.email}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

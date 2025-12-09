export default function SourceRow({ index, id, name, email, onDelete }) {
  return (
    <div className="row">
      <div className="num-badge">{index}</div>
      <div className="name">{name}</div>
      <div className="email">{email}</div>
      <button className="delete-btn" type="button" onClick={() => onDelete(id)}>
        DELETE
      </button>
    </div>
  );
}

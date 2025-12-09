import { useState } from "react";

export default function SourceForm({ onAdd }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    onAdd(name, email);
    setName("");
    setEmail("");
  };

  return (
    <form className="input-form" onSubmit={handleAdd}>
      <div className="field field-name">
        <label>Source Name:</label>
        <input
          type="text"
          value={name}
          placeholder="e.g., Jane Doe"
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="field field-email">
        <label>Source Email:</label>
        <input
          type="text"
          value={email}
          placeholder="e.g., jane@columbia.edu"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <button className="add-btn" type="submit">
        ADD
      </button>
    </form>
  );
}

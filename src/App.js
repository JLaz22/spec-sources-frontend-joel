import "./App.css";
import LogoRow from "./components/LogoRow";
import PageTitle from "./components/PageTitle";
import SourceForm from "./components/SourceForm";
import SourceList from "./components/SourceList";

import { useState, useEffect } from "react";
import axios from "axios";

import { Routes, Route, Link } from "react-router-dom";
import QuizPage from "./QuizPage";

const API_BASE =
  "https://spec-sources-joel-api-551346379114.us-central1.run.app";

export default function App() {
  const [sources, setSources] = useState([]);

  // Load all sources on mount
  useEffect(() => {
    axios
      .get(`${API_BASE}/all`)
      .then((response) => {
        setSources(response.data); // should be an array from /all
      })
      .catch((err) => {
        console.error("Failed to load sources:", err);
      });
  }, []);

  // Create a new source via backend /create
  const addSource = async (name, email) => {
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    if (!trimmedName || !trimmedEmail) return;

    try {
      const response = await axios.post(`${API_BASE}/create`, {
        name: trimmedName,
        email: trimmedEmail,
      });
      // response.data should be the created SpectatorSource object with its DB id
      setSources((prev) => [...prev, response.data]);
    } catch (err) {
      console.error("Failed to create source:", err);
    }
  };

  // Delete a source via backend /delete/{id}
  const deleteSource = async (id) => {
    try {
      await axios.delete(`${API_BASE}/delete/${id}`);
      // If delete succeeds (204), update local state
      setSources((prev) => prev.filter((s) => s.id !== id));
    } catch (err) {
      console.error(`Failed to delete source with id ${id}:`, err);
    }
  };

  return (
    <>
      {/* Navigation bar */}
      <nav style={{ padding: "20px" }}>
        <Link to="/" style={{ marginRight: "20px" }}>
          Home
        </Link>
        <Link to="/quiz">Quiz</Link>
      </nav>

      <Routes>
        {/* HOME */}
        <Route
          path="/"
          element={
            <div className="page">
              <LogoRow />
              <PageTitle>Spectator’s Sources</PageTitle>

              <div className="input-panel">
                <SourceForm onAdd={addSource} />
              </div>

              <SourceList sources={sources} onDelete={deleteSource} />
            </div>
          }
        />

        {/* QUIZ */}
        <Route path="/quiz" element={<QuizPage />} />
      </Routes>
    </>
  );
}

import { useState } from "react";
import "./SearchPage.css";

export default function SearchPage() {
  const [org, setOrg] = useState("");
  const [result, setResult] = useState(null);

  const handleSearch = () => {
    const fakePercent = Math.floor(Math.random() * 60) + 20;
    setResult({ name: org, percent: fakePercent });
  };

  return (
    <div className="search-page">
      <div className="frosted-box">
        <h2 className="page-title">🔍 Check a Company</h2>

        <input
          type="text"
          placeholder="Enter company name"
          value={org}
          onChange={(e) => setOrg(e.target.value)}
          className="text-input"
        />

        <button onClick={handleSearch} className="primary-button">
          Check Ghost Score
        </button>

        {result && (
          <div
            className={`result-box ${
              result.percent > 75 ? "high-risk" : "low-risk"
            }`}
          >
            <p className="result-label">{result.name}</p>
            <p className="result-percent">
              {result.percent}% Likely Ghost Job
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

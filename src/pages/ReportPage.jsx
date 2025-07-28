import { useState } from "react";
import "./ReportPage.css";

export default function ReportPage() {
  const [form, setForm] = useState({
    company: "",
    jobTitle: "",
    link: "",
    reason: "",
    comments: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your report!");
    setForm({ company: "", jobTitle: "", link: "", reason: "", comments: "" });
  };

  return (
    <div className="report-page">
      <div className="frosted-box">
        <h2 className="page-title">📝 Report a Ghost Job</h2>
        <form onSubmit={handleSubmit} className="form-section">
          {["company", "jobTitle", "link", "comments"].map((field) => (
            <input
              key={field}
              type="text"
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              value={form[field]}
              onChange={(e) => setForm({ ...form, [field]: e.target.value })}
              className="text-input"
              required={field !== "comments"}
            />
          ))}
          <select
            value={form.reason}
            onChange={(e) => setForm({ ...form, reason: e.target.value })}
            required
            className="text-input"
          >
            <option value="">Select reason</option>
            <option value="no-response">No response</option>
            <option value="ghosted-after-interview">Ghosted after interview</option>
            <option value="job-removed">Job disappeared</option>
          </select>
          <button type="submit" className="primary-button">
            Submit Report
          </button>
        </form>
      </div>
    </div>
  );
}

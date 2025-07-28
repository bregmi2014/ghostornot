import { useParams } from "react-router-dom";
import "./CompanyProfile.css";

export default function CompanyProfile() {
  const { name } = useParams();
  const mock = {
    percent: 82,
    totalReports: 34,
    comments: [
      "Applied twice, never heard back.",
      "Had a phone interview — then vanished.",
    ],
  };

  return (
    <div className="profile-page">
      <div className="frosted-box">
        <h2 className="page-title">{name}</h2>
        <p className="summary-text">
          Ghost Job Rating: <span className="high-risk">{mock.percent}%</span>
        </p>
        <p className="summary-text">Total Reports: {mock.totalReports}</p>
        <h3 className="subheading">User Comments</h3>
        <ul className="comment-list">
          {mock.comments.map((c, i) => (
            <li key={i}>{c}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

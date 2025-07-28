import "./TopPosters.css";

const data = [
  { name: "Company A", percent: 92, reports: 120 },
  { name: "Company B", percent: 84, reports: 80 },
  { name: "Company C", percent: 78, reports: 67 },
];

export default function TopPosters() {
  return (
    <div className="top-posters-page">
      <div className="frosted-box">
        <h2 className="page-title">📈 Top Ghost Job Posters</h2>
        <table className="custom-table">
          <thead>
            <tr>
              <th>Company</th>
              <th>% Ghost</th>
              <th>Reports</th>
            </tr>
          </thead>
          <tbody>
            {data.map((org, idx) => (
              <tr key={idx}>
                <td>{org.name}</td>
                <td className={org.percent > 75 ? "high-risk" : "medium-risk"}>
                  {org.percent}%
                </td>
                <td>{org.reports}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

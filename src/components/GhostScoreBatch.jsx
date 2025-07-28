import "./GhostScoreBadge.css";

export default function GhostScoreBadge({ percent }) {
  const danger = percent >= 75;

  return (
    <span className={`ghost-badge ${danger ? "danger" : "safe"}`}>
      {percent}% Ghost Risk
    </span>
  );
}

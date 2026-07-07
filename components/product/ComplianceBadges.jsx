const BADGES = [
  { icon: '✓', label: 'Conforme AMO · CNOPS · CNSS' },
  { icon: '🔒', label: 'Hébergement sécurisé' },
  { icon: '⚖', label: 'Conforme loi 09-08' },
];

export default function ComplianceBadges() {
  return (
    <div className="compliance-badges">
      {BADGES.map((b) => (
        <span className="compliance-badge" key={b.label}>
          <span className="compliance-badge-icon">{b.icon}</span>
          {b.label}
        </span>
      ))}
    </div>
  );
}

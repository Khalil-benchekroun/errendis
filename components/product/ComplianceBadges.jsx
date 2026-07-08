const BADGE_SETS = {
  sante: [
    { icon: '✓', label: 'Conforme AMO · CNOPS · CNSS' },
    { icon: '🔒', label: 'Hébergement sécurisé' },
    { icon: '⚖', label: 'Conforme loi 09-08' },
  ],
  location: [
    { icon: '📍', label: 'Suivi GPS temps réel' },
    { icon: '🔒', label: 'Hébergement sécurisé' },
    { icon: '⚖', label: 'Conforme loi 09-08' },
  ],
  transit: [
    { icon: '🛃', label: 'Suivi conformité douanière' },
    { icon: '🔒', label: 'Hébergement sécurisé' },
    { icon: '⚖', label: 'Conforme loi 09-08' },
  ],
};

export default function ComplianceBadges({ set = 'sante' }) {
  const badges = BADGE_SETS[set] || BADGE_SETS.sante;
  return (
    <div className="compliance-badges">
      {badges.map((b) => (
        <span className="compliance-badge" key={b.label}>
          <span className="compliance-badge-icon">{b.icon}</span>
          {b.label}
        </span>
      ))}
    </div>
  );
}

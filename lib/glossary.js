export const glossaryTerms = [
  {
    term: 'AMO',
    category: 'Santé',
    definition:
      'Assurance Maladie Obligatoire. Régime de couverture médicale de base au Maroc, applicable aux salariés du secteur privé et public.',
  },
  {
    term: 'AMO Tadamon',
    category: 'Santé',
    definition:
      'Extension de l\u2019AMO destinée aux populations vulnérables et non-salariées au Maroc, dans le cadre de la généralisation de la couverture sociale.',
  },
  {
    term: 'CNOPS',
    category: 'Santé',
    definition:
      'Caisse Nationale des Organismes de Prévoyance Sociale. Organisme gérant l\u2019AMO pour les fonctionnaires et agents du secteur public marocain.',
  },
  {
    term: 'CNSS',
    category: 'Santé',
    definition:
      'Caisse Nationale de Sécurité Sociale. Organisme gérant la couverture sociale, dont l\u2019AMO, pour les salariés du secteur privé au Maroc.',
  },
  {
    term: 'Kt/V',
    category: 'Santé',
    definition:
      'Indicateur mesurant l\u2019efficacité d\u2019une séance de dialyse, en comparant la clairance de l\u2019urée à son volume de distribution. Une valeur cible autour de 1,2 à 1,4 est généralement recherchée.',
  },
  {
    term: 'FAV (Fistule artério-veineuse)',
    category: 'Santé',
    definition:
      'Accès vasculaire créé chirurgicalement entre une artère et une veine, utilisé pour faciliter les séances d\u2019hémodialyse répétées.',
  },
  {
    term: 'HL7',
    category: 'Santé',
    definition:
      'Health Level Seven. Norme internationale d\u2019échange de données de santé entre systèmes informatiques, utilisée par exemple pour transmettre des résultats de laboratoire vers un dossier patient.',
  },
  {
    term: 'DMP',
    category: 'Santé',
    definition:
      'Dispositif Médical de Diagnostic (ou d\u2019enregistrement selon contexte). Désigne l\u2019enregistrement réglementaire nécessaire pour commercialiser certains équipements médicaux au Maroc.',
  },
  {
    term: 'FEFO',
    category: 'Distribution',
    definition:
      'First Expired, First Out. Méthode de gestion de stock qui fait sortir en priorité les produits dont la date de péremption est la plus proche, indépendamment de leur date d\u2019arrivée.',
  },
  {
    term: 'FIFO',
    category: 'Distribution',
    definition:
      'First In, First Out. Méthode de gestion de stock qui fait sortir en priorité les produits arrivés en premier, quelle que soit leur date de péremption.',
  },
  {
    term: 'CAPA',
    category: 'Distribution',
    definition:
      'Corrective Action, Preventive Action. Démarche qualité consistant à corriger une non-conformité identifiée et à mettre en place des mesures pour éviter qu\u2019elle ne se reproduise.',
  },
  {
    term: 'RMA',
    category: 'Distribution',
    definition:
      'Return Merchandise Authorization. Autorisation de retour marchandise, processus encadrant le renvoi d\u2019un produit par un client pour remboursement, échange ou réparation.',
  },
  {
    term: 'ISO 13485',
    category: 'Distribution',
    definition:
      'Norme internationale de système de management de la qualité spécifique aux dispositifs médicaux, couvrant leur conception, production et distribution.',
  },
  {
    term: 'Consignation (stock)',
    category: 'Distribution',
    definition:
      'Modèle où un stock est déposé chez le client mais reste la propriété du fournisseur jusqu\u2019à sa consommation effective, moment auquel il est facturé.',
  },
  {
    term: 'FCL',
    category: 'Logistique',
    definition:
      'Full Container Load. Expédition maritime où un conteneur complet est réservé pour une seule marchandise ou un seul client, par opposition au groupage (LCL).',
  },
  {
    term: 'LCL',
    category: 'Logistique',
    definition:
      'Less than Container Load. Expédition maritime en groupage, où plusieurs marchandises de différents clients partagent un même conteneur.',
  },
  {
    term: 'Transitaire',
    category: 'Logistique',
    definition:
      'Professionnel ou entreprise organisant le transport de marchandises pour le compte d\u2019un client, en coordonnant les différents intervenants (transporteurs, douane, entrepôts).',
  },
  {
    term: 'Connaissement (Bill of Lading)',
    category: 'Logistique',
    definition:
      'Document de transport maritime faisant office de contrat de transport, de preuve de propriété de la marchandise et de reçu de prise en charge par le transporteur.',
  },
  {
    term: 'Dédouanement',
    category: 'Logistique',
    definition:
      'Ensemble des formalités administratives permettant à une marchandise de franchir légalement la douane à l\u2019import ou à l\u2019export.',
  },
  {
    term: 'RC (Registre du Commerce)',
    category: 'Entreprise',
    definition:
      'Registre officiel marocain recensant les entreprises et commerçants, attribuant un numéro unique d\u2019immatriculation à chaque structure.',
  },
  {
    term: 'ICE',
    category: 'Entreprise',
    definition:
      'Identifiant Commun de l\u2019Entreprise. Numéro unique attribué à chaque entreprise marocaine, utilisé dans ses relations avec l\u2019administration.',
  },
  {
    term: 'Loi 09-08',
    category: 'Entreprise',
    definition:
      'Loi marocaine relative à la protection des personnes physiques à l\u2019égard du traitement de leurs données à caractère personnel, encadrée par la CNDP.',
  },
  {
    term: 'SaaS',
    category: 'Entreprise',
    definition:
      'Software as a Service. Modèle de logiciel accessible en ligne par abonnement, sans installation locale, hébergé et maintenu par l\u2019éditeur.',
  },
];

export function getGlossaryByCategory() {
  const categories = {};
  glossaryTerms.forEach((t) => {
    if (!categories[t.category]) categories[t.category] = [];
    categories[t.category].push(t);
  });
  return categories;
}

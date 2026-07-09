#!/bin/bash
# Lance depuis la racine du projet errendis-main/
# Ajoute productName={product.name} aux deux composants dans les 9 pages produit

SLUGS="dialya labya medira rentara logistara medikara restara batira skolara"

for slug in $SLUGS; do
  FILE="app/produits/$slug/page.jsx"
  if [ -f "$FILE" ]; then
    # ModuleShowcase
    sed -i 's|<ModuleShowcase modules={product\.modules} />|<ModuleShowcase modules={product.modules} productName={product.name} />|g' "$FILE"
    # PatientAppSection
    sed -i 's|<PatientAppSection app={product\.patientApp} />|<PatientAppSection app={product.patientApp} productName={product.name} />|g' "$FILE"
    echo "✓ $FILE"
  else
    echo "✗ $FILE introuvable"
  fi
done
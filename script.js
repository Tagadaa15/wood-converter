
function calculerPrix() {
  // Récupérer la quantité entrée par l'utilisateur
  const quantite = document.getElementById("quantite").value;

  // Vérifier si la quantité est valide
  if (quantite <= 0 || isNaN(quantite)) {
    document.getElementById("resultat").textContent = "Veuillez entrer une quantité valide.";
    return;
  }

  // Calculer le prix
  const prixUnitaire = 600; // Prix d'une unité de bois
  const prixTotal = quantite * prixUnitaire;

  // Afficher le résultat
  document.getElementById("resultat").textContent = `Le prix total pour ${quantite} unités est de ${prixTotal.toLocaleString()} $.`;
}

function lancerJeu() {
    let choix = choisirPhrasesOuMots()
    let score = 0 
    let nombreTotal = 0 
if (choix === 'mots') {
    lancerBoucleDeJeu(listeMots)
    nombreTotal = listeMots.length

} else {
    lancerBoucleDeJeu(listePhrases)
    nombreTotal = listePhrases.length
}
  afficherResultat(score,nombreTotal)
}
lancerJeu();
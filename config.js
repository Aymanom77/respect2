function afficherResultat(Resultat, nombreTotal) {
    // On affiche le score de l'utilisateur
    let message = (" votre score est de " + score + " sur " + nombreTotal);
    return message
}
function choisirPhrasesOuMots() {
    // Tant que l'utilisateur n'a pas choisit mot ou phrase on lui redemande
    let choix = prompt("vous voulez jouer avec des mots (entrez )" + mots + "ou les phrases (entrez )" + phrase)
    while (choix !== "mots" && choix !== "phrases") {
        choix = ("vous devez choisir entre mots et phrases")
    }
    }

    let inputEcriture = document.getElementById("inputEcriture")
    let btnValiderMot = document.getElementById(".btnValiderMot")
    let zoneOptions = document.querySelector(".zoneOptions")
    let zonzScore = document.querySelector(".zonescore")
    let popup = document.querySelectorAll(".popup")
   
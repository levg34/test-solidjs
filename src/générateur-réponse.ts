export function génèreRéponse(texte: string): string {
    if (estGHmot(texte)) {
        return génèreGHmot(texte)
    }

    return `Ah d'accord ! Tu as dit « ${texte} ».`
}

export function estGHmot(texte: string): boolean {
    const texteMinuscule = texte.toLowerCase()
    let i = 0
    while (i < texteMinuscule.length - 1) {
        if (texteMinuscule[i] === 'g' && texteMinuscule[i + 1] === 'h') {
            return true
        }
        i++
    }
    return false
}

export function génèreGHmot(texte: string): string {
    let longueur = texte.length + Math.floor(Math.random() * 5) - 2
    longueur = Math.max(longueur, 2) // Assure une longueur minimale de 2
    let resultat = ''
    for (let i = 0; i < longueur; i++) {
        const majuscule = Math.random() < 0.5
        resultat += majuscule ? 'G' : 'g'
        if (i < longueur - 1 && Math.random() < 0.5) {
            resultat += majuscule ? 'H' : 'h'
            i++
        }
    }
    return resultat
}

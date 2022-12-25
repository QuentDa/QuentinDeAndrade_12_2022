/**
 * Fonction pour lier les kind entre eux.
 * @param {Array}
 */

export default function formatKind(dataPerformance) {
    const kinds = ['Cardio', 'Energie', 'Endurance', 'Force', 'Vitesse', 'Intensité']

    dataPerformance.forEach(performance => {
        performance.kind = kinds[performance.kind - 1]
    })
}
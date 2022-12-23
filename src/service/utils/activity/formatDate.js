/**
 * Fonction pour formater la date provenant de la data de activities
 * @param {Array}
 */

export default function formatDate(dataActivitySessions) {
        for (let i = 0; i < dataActivitySessions.length; i++) {
           dataActivitySessions[i] = {
            ...dataActivitySessions[i],
            day: i + 1
           }
        }
}

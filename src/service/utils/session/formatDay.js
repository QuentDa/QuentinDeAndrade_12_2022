/**
 * Fonction pour formater les jours en format lettre.
 * @param {Array}
 */

export default function formatDay(dataDay) {
    const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

    dataDay.forEach(session => {
        session.day = days[session.day - 1]
    })
}

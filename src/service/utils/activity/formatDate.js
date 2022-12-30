/**
 * Function to format the day from API data in days number instead of full date
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

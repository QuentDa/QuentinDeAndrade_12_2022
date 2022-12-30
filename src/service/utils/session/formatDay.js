/**
 * Function to format the days from the API data in a letter format.
 * @param {Array} * Data from the API
 */

export default function formatDay(dataDay) {
    const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

    dataDay.forEach(session => {
        session.day = days[session.day - 1]
    })
}

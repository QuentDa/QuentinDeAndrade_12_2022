/**
 * Function to format kinds name
 * @param {Array} * performance data in props
 * @return {object} * formatted by reversing the array in order to fit the mockup. 
 */

export default function formatKind(dataPerformance) {
    const kinds = ['Cardio', 'Energie', 'Endurance', 'Force', 'Vitesse', 'Intensité']

    return dataPerformance.map(performance => {
       return {
        value: performance.value,
        kind: kinds[performance.kind - 1]
       }
    }).reverse()
}
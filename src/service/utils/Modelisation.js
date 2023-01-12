export default class Modelisation {

    /**
     * Function to get the data from USER_MAIN_DATA from the API
     * @param {object} raw
     * @returns {object}
     * 
    */
    static prepareInfo(raw) {
        let data = {};
        data.firstName = raw.data.userInfos.firstName;
        data.calorieCount = raw.data.keyData.calorieCount;
        data.proteinCount = raw.data.keyData.proteinCount;
        data.carbohydrateCount = raw.data.keyData.carbohydrateCount;
        data.lipidCount = raw.data.keyData.lipidCount;
        data.todayScore = raw.data.todayScore

        return data;
    }

    /**
     * Function to get the data from USER_ACTIVITY from the API
     * @param{object} raw
     * @returns{object}
     * 
    */
    static prepareActivity(raw) {
        return raw.data;
    }

    /**
     * Function to get the data from USER_AVERAGE_SESSIONS from the API
     * @param{object} raw
     * @returns{object}
     * 
    */
    static prepareSession(raw) {
        return raw.data;
    }

    /**
     * Function to get the data from USER_PERFORMANCE from the API
     * @param{object} raw
     * @returns{object}
     * 
    */
    static preparePerformance(raw) {
        return raw.data;
    }
}
export default class Modelisation {

    /**
     * Fonction pour cibler les données de USER_MAIN_DATA récupérées en API
     * @param{object} raw
     * @returns{object}
     * 
    */
    static prepareInfo(raw) {
        let data = {};
        data.firstName = raw.data.userInfos.firstName;
        data.calorieCount = raw.data.keyData.calorieCount;
        data.proteinCount = raw.data.keyData.proteinCount;
        data.carbohydrateCount = raw.data.keyData.carbohydrateCount;
        data.lipidCount = raw.data.keyData.lipidCount;

        return data;
    }

    /**
     * Fonction pour cibler les données de USER_ACTIVITY récupérées en API
     * @param{object} raw
     * @returns{object}
     * 
    */
    static prepareActivity(raw) {
        return raw.data;
    }

    /**
     * Fonction pour cibler les données de USER_AVERAGE_SESSIONS récupérées en API
     * @param{object} raw
     * @returns{object}
     * 
    */
    static prepareSession(raw) {
        return raw.data;
    }

    /**
     * Fonction pour cibler les données de USER_PERFORMANCE récupérées en API
     * @param{object} raw
     * @returns{object}
     * 
    */
    static preparePerformance(raw) {
        return raw.data;
    }
}
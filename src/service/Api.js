import { ApiUrl } from "../config/env";

/**
 * Function to pick up the correct data depending on the service that uses a component
 * @param {string} service *Getting the right data
 * @param {number} id *Getting the user ID
 * @returns {object} *Right Data from backend
 */

export async function GetApiUrl(service, id) {
    let url;

    // eslint-disable-next-line default-case
    switch(service) {
        case 'info':
            url = ApiUrl() + id;
            break;
        case 'activity':
            url = ApiUrl() + id +'/activity';
            break;
        case 'session':
            url = ApiUrl() + id +'/average-sessions';
            break;
        case 'performance':
            url = ApiUrl() + id +'/performance';
            break;
    }
    let result = await fetch(url)
    let resultJS = await result.json()
    return resultJS;
}
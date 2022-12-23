import { ApiUrl } from "../config/env";

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
    }
    let result = await fetch(url)
    let resultJS = await result.json()
    return resultJS;
}
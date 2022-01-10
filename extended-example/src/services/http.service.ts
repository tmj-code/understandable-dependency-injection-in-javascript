import { ILog } from './log.service';

export default class HttpService {
    constructor(
        private readonly _apiUrl: string,
        private readonly _log: ILog) {}

    protected sendAsync<T>(
        method: 'GET' | 'POST' | 'PUT' | 'DELETE',
        relativeUrl: string,
        body?: any): Promise<T> {
            return new Promise((resolve, reject) => {
                fetch(`${this._apiUrl}${relativeUrl}`, 
                    { method: method, body: body})
                    .then(response => resolve(response.json()))
                    .catch(error => {
                        this._log.error(error);
                        reject();
                    });
            })
        }
}

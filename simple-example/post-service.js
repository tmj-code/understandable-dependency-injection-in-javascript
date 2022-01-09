export default class PostService {
    _apiUrl;

    constructor(apiUrl) {
        this._apiUrl = apiUrl;
    }

    getList() {
        return fetch(`${this._apiUrl}/posts`)
            .then(response => response.json());
    }
}

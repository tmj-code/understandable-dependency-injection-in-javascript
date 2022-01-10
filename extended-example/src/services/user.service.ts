export default class UserService {
    // View this as being set at login
    private _userId = Math.floor(Math.random() * 100);

    public get userId(): number { return this._userId }
}

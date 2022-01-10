import UserService from '../services/user.service';

export default class AppController {
    constructor(private readonly _userService: UserService) {}

    public get userId(): number { return this._userService.userId; }
}

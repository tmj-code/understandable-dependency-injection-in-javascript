import IPost from '../models/post';
import LogService, { ILog } from '../services/log.service';
import PostService from '../services/post.service';
import UserService from '../services/user.service';

export default class PostFormController {
    private readonly _log: ILog;

    private _post: IPost | null = null;

    constructor(
        private readonly _postService: PostService,
        private readonly _userService: UserService,
        logService: LogService) { 
            this._log = logService('post-form');
        }
    
    public get post(): IPost | null { return this._post; }
    
    public loadPostAsync(id: number): Promise<void> {
        if (id) {
            this._log.info(`loading post ${id}`);
            return this._postService.getByIdAsync(id)
                .then(post => {
                    this._post = post || null;
                    return;
                });
        }
        else {
            this._log.info('working with new post');
            this._post = {
                userId: -1,
                id: -1,
                title: '',
                body: ''
            }

            return Promise.resolve();
        }
    }

    public setTitle(title: string): void {
        if (this._post) {
            this._post.title = title;
        }
    }

    public setBody(body: string): void {
        if (this._post) {
            this._post.body = body;
        }
    }

    public savePostAsync(): Promise<void> {
        if (this._post) {
            this._post.userId = this._userService.userId;
            
            if (this._post.id === -1) {
                return this._postService.addAsync(this._post);
            }
            else {
                return this._postService.updateAsync(this._post);
            }
        }

        return Promise.reject();
    }

    public deletePostAsync(): Promise<void> {
        if (this._post) {
            if (confirm('Really delete?')) {
                return this._postService.deleteAsync(this._post.id);
            }
        }

        return Promise.reject();
    }
}

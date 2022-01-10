import IPost from '../models/post';
import LogService, { ILog } from '../services/log.service';
import PostService from '../services/post.service';

export default class PostListController {
    private readonly _log: ILog;
    private readonly _posts: IPost[] = [];

    constructor(
        private readonly _postService: PostService,
        logService: LogService) { 
            this._log = logService('post-list');
        }
    
        public get posts(): IPost[] { return [...this._posts]; }

        public loadPostsAsync(): Promise<void> {
            this._log.info('loading posts');
            return this._postService.getListAsync()
                .then(posts => {
                    this._posts.length = 0;
                    this._posts.push(...posts);
                })
                .catch(error => this._log.error(error));
        }
}

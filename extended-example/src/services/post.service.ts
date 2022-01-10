import IPost from '../models/post';
import HttpService from './http.service';
import LogService from './log.service';

export default class PostService extends HttpService {
    constructor(
        apiUrl: string,
        logService: LogService) {
            super(apiUrl, logService('post-service'));
     }

    public getListAsync(): Promise<IPost[]> {
        return this.sendAsync<IPost[]>('GET', '/posts');
    }

    public getByIdAsync(id: number): Promise<IPost> {
        return this.sendAsync<IPost>('GET', `/posts/${id}`);
    }

    public addAsync(post: IPost): Promise<void> {
        return this.sendAsync<void>('POST', '/posts', post);
    }

    public updateAsync(post: IPost): Promise<void> {
        return this.sendAsync<void>('PUT', `/posts/${post.id}`, post);
    }

    public deleteAsync(id: number): Promise<void> {
        return this.sendAsync<void>('DELETE', `/posts/${id}`);
    }
}

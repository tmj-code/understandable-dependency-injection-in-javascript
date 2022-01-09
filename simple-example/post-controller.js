export default class PostController {
    _postService;
    _posts = [];
    
    constructor(postService) {
      this._postService = postService;
    }
    
    get posts() { return [..._posts]; }

    loadPost() {
      this._postService.getList()
          .then(posts => {
              this._posts.length = 0;
              this._posts.push(...posts);
          });
    }
}

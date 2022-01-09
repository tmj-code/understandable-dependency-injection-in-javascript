import container from './di-container';
import PostService from './post-service';
import PostController from './post-controller';
import PostView from './post-view';

const postServiceFactory = () => 
  new PostService('https://jsonplaceholder.typicode.com');
const postControllerFactory = () => 
  new PostController(postServiceFactory());

container.postController = postControllerFactory;

Object.freeze(container);

PostView(document.body);

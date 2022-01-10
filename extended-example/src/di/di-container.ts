import AppController from '../controllers/app.controller';
import PostFormController from '../controllers/post-form.controller';
import PostListController from '../controllers/post-list.controller';

// We use this function to give a meaningful error message if a service is missing in the DI.
const throwNotInitialized = () => { throw new Error('DI not initializes'); };

export default {
    appController: throwNotInitialized as () => AppController,
    postListController: throwNotInitialized as () => PostListController,
    postFormController: throwNotInitialized as () => PostFormController
}

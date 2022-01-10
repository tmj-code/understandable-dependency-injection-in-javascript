import container from './di-container';
import PostService from '../services/post.service';
import PostListController from '../controllers/post-list.controller';
import PostFormController from '../controllers/post-form.controller';
import { LogService } from '../services/log.service';
import UserService from '../services/user.service';
import AppController from '../controllers/app.controller';

export function diSetup(apiUrl: string): void {

    // This is a singleton service; the same instance is returned each time.
    const userService = new UserService();
    const userServiceFactory = () => userService;

    // This provides a function, not an instance.
    const logServiceFactory = () => LogService;

    // This is a non-singleton or transient service; a new is created each time it is requested.
    // The service takes an argument that is provided by the entry point, potentially some kind of environment setting.
    const postServiceFactory = () => new PostService(apiUrl, logServiceFactory());

    // The controller factories could be set directly on the container instead of being first defined then set.
    // By separating it, the code that sets stuff on the container is less cluttered, so it is easier to scan for missing services.
    const appControllerfactory = () => new AppController(userServiceFactory());
    const postListControllerFactory = () => new PostListController(postServiceFactory(), logServiceFactory());
    const postFormControllerFactory = () => new PostFormController(postServiceFactory(), userServiceFactory(), logServiceFactory());

    container.appController = appControllerfactory;
    container.postListController = postListControllerFactory
    container.postFormController = postFormControllerFactory;
}

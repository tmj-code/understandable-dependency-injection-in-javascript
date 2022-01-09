import container from './di-container';

export default function PostView(rootElement) {
    const controller = container.postController();
    const list = document.createElement('ul');
    rootElement.appendChild(list);

    controller.loadPosts()
        .then(() => {
            while (list.lastChild) {
                list.removeChild(list.lastChild);
            }
            
            controller.posts.forEach(post => {
                const item = document.createElement('li');
                item.innerText = post.title;
                list.appendChild(item);
            });

            rootElement.appendChild(list);
        });
}

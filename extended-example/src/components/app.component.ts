import m from 'mithril';
import container from '../di/di-container';
import PostForm from './post-form.component';
import PostList from './post-list.component';

export default function App(): m.Component {
    const ctrl = container.appController();
    function setupRouting(element: Element): void {
        m.route.prefix = '';

        m.route(element, '/',  {
            '/': PostList,
            '/posts': PostForm,
            '/posts/:id': PostForm
        });
    }

    return {
        view: () => m('div.app',
            m('header', 'Post Office'),
            m('main', {
                oncreate: vnode => setupRouting(vnode.dom)
            }),
            m('footer',
                `Current user: ${ctrl.userId}`
            )
        )
    };
}

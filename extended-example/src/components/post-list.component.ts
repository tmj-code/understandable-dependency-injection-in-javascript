import m from 'mithril';
import container from '../di/di-container';

export default function PostList(): m.Component {
    const ctrl = container.postListController();
    ctrl.loadPostsAsync().then(() => m.redraw());

    return {
        view: () => m('section.post-list',
            m('ul',
                ctrl.posts.map(post => 
                    m('li', 
                        m(m.route.Link, { href: `/posts/${post.id}`}, post.title)
                    )
                )
            ),
			m(m.route.Link, { href: '/posts', className: 'button' }, 'Add new post')
        )
    };
}

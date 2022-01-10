import m from 'mithril';
import container from '../di/di-container';

export default function PostForm(): m.Component {
    const ctrl = container.postFormController();
    const id = m.route.param('id');
    ctrl.loadPostAsync(Number(id)).then(() => m.redraw());

    return {
        view: () => m('form.post-form',
            ctrl.post ? [
                m('label', 
                    m('span', 'Title'), 
                    m('input[type="text"]', { 
                        value: ctrl.post.title,
                        onchange: (e: Event) => ctrl.setTitle((e.target as HTMLInputElement).value)
                    })
                ),
                m('label', 
                    m('span', 'Body'), 
                    m('textarea', { 
                        value: ctrl.post.body,
                        onchange: (e: Event) => ctrl.setBody((e.target as HTMLInputElement).value)
                    })
                ),
                m('button.button[type="button"]', {
                    onclick: () => ctrl.deletePostAsync().then(() => m.route.set('/'))
                }, 'Delete'),
                m('button.button[type="button"]', { 
                    onclick: () => ctrl.savePostAsync().then(() => m.route.set('/'))
                }, 'Save')
            ] : null
        )
    };
}

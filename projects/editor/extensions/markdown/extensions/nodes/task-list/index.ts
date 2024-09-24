import BulletList from '@taiga-ui/editor/extensions/markdown/extensions/nodes/bullet-list';
import {tuiMarkdownItTaskList} from '@taiga-ui/editor/extensions/markdown/util';
import {Node} from '@tiptap/core';
import type MarkdownIt from 'markdown-it';

export default Node.create({
    name: 'taskList',
}).extend({
    addStorage() {
        return {
            markdown: {
                serialize: BulletList.storage.markdown.serialize,
                parse: {
                    setup(markdown: MarkdownIt) {
                        markdown.use(tuiMarkdownItTaskList);
                    },
                    updateDOM(element: Element) {
                        Array.from(
                            element.querySelectorAll('.contains-task-list'),
                        ).forEach((list) => {
                            list.setAttribute('data-type', 'taskList');
                        });
                    },
                },
            },
        };
    },
});

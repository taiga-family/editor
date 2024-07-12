import {Node} from '@tiptap/core';
import type MarkdownIt from 'markdown-it';

import {tuiMarkdownItTaskList} from '../../util/markdown-it-task-lists';
import BulletList from './bullet-list';

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

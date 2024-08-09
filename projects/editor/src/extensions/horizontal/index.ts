import {isNodeSelection} from '@tiptap/core';
import {HorizontalRule} from '@tiptap/extension-horizontal-rule';
import {NodeSelection, TextSelection} from 'prosemirror-state';

export const TuiHorizontalRule = HorizontalRule.extend({
    addCommands() {
        return {
            setHorizontalRule:
                () =>
                ({chain, state, editor}) => {
                    const {selection} = state;
                    const {$from: $originFrom, $to: $originTo} = selection;

                    const currentChain = chain();

                    if (editor.isActive('summary')) {
                        return false;
                    }

                    if ($originFrom.parentOffset === 0) {
                        currentChain.insertContentAt(
                            {
                                from: Math.max($originFrom.pos - 1, 0),
                                to: $originTo.pos,
                            },
                            '<p></p>',
                        );

                        currentChain.insertContentAt(
                            {
                                from: Math.max($originFrom.pos - 1, 0),
                                to: $originTo.pos,
                            },
                            {
                                type: this.name,
                            },
                        );
                    } else if (isNodeSelection(selection)) {
                        currentChain.insertContentAt($originTo.pos, {
                            type: this.name,
                        });
                    } else {
                        currentChain.insertContent({type: this.name});
                    }

                    return (
                        currentChain
                            // set cursor after horizontal rule
                            .command(({tr, dispatch}) => {
                                if (dispatch) {
                                    const {$to} = tr.selection;
                                    const posAfter = $to.end();

                                    if ($to.nodeAfter) {
                                        if ($to.nodeAfter.isTextblock) {
                                            tr.setSelection(
                                                TextSelection.create(tr.doc, $to.pos + 1),
                                            );
                                        } else if ($to.nodeAfter.isBlock) {
                                            tr.setSelection(
                                                NodeSelection.create(tr.doc, $to.pos),
                                            );
                                        } else {
                                            tr.setSelection(
                                                TextSelection.create(tr.doc, $to.pos),
                                            );
                                        }
                                    } else {
                                        // add node after horizontal rule if it’s the end of the document
                                        const node =
                                            $to.parent.type.contentMatch.defaultType?.create();

                                        if (node) {
                                            tr.insert(posAfter, node);
                                            tr.setSelection(
                                                TextSelection.create(
                                                    tr.doc,
                                                    posAfter + 1,
                                                ),
                                            );
                                        }
                                    }

                                    tr.scrollIntoView();
                                }

                                return true;
                            })
                            .run()
                    );
                },
        };
    },
});

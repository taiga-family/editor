import {DEMO_PATHS, isEmbedPage} from '../support/helpers/demo-paths';

describe(`Demo`, () => {
    for (const path of DEMO_PATHS) {
        it(path, () => {
            cy.tuiVisit(path, {hideScrollbar: true});

            cy.get(`body`).then($body => {
                if (isEmbedPage(path)) {
                    cy.wait(40_000);
                }

                if ($body.find(`tui-doc-example`).length < 1) {
                    return;
                }

                cy.get(`tui-doc-example`).each((example, index) => {
                    cy.wrap(example)
                        .find(`.t-example`)
                        .tuiFindByExampleId()
                        .tuiScrollIntoView()
                        .as(`example`);

                    cy.get(`@example`)
                        .find(`tui-editor-socket`)
                        .then(socket => {
                            if (Cypress.$(socket).length > 1) {
                                cy.get(`@example`)
                                    .find(`tui-editor`)
                                    .tuiWaitBeforeScreenshot()
                                    .matchImageSnapshot(`${path}/${index + 1}__editor`);

                                cy.get(`@example`)
                                    .find(`tui-editor`)
                                    .tuiWaitBeforeScreenshot()
                                    .matchImageSnapshot(`${path}/${index + 1}__editor`);

                                cy.wrap(socket)
                                    .eq(1)
                                    .tuiWaitBeforeScreenshot()
                                    .matchImageSnapshot(`${path}/${index + 1}__output`);
                            } else {
                                cy.get(`@example`)
                                    .tuiWaitBeforeScreenshot()
                                    .matchImageSnapshot(`${path}/${index + 1}`);
                            }
                        });
                });
            });
        });
    }
});

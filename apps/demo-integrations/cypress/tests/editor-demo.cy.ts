import {tuiComponentsExcluded} from '../support/helpers/components-excluded';
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

                    return tuiComponentsExcluded(path, index + 1)
                        ? cy.get(`@example`)
                        : cy
                              .get(`@example`)
                              .tuiWaitBeforeAction()
                              .wait(Cypress.env(`waitBeforeScreenshotComponents`) ?? 50, {
                                  log: false,
                              })
                              .matchImageSnapshot(`${path}/${index + 1}`);
                });
            });
        });
    }
});

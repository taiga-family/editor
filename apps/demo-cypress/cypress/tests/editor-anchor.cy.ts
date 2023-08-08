describe(`Editor's anchors`, () => {
    beforeEach(() => {
        cy.viewport(1280, 500).tuiVisit(`anchors`);

        cy.get(`tui-doc-example[heading="Anchors"]`).tuiScrollIntoView().as(`wrapper`);

        cy.get(`@wrapper`).findByAutomationId(`tui-doc-example`).as(`example`);
    });

    it(`all content`, () => {
        cy.get(`@example`)
            .tuiWaitBeforeScreenshot()
            .matchImageSnapshot(`anchors-example-content`);
    });

    describe(`anchors`, () => {
        beforeEach(() => {
            cy.get(`@wrapper`)
                .find(`h4`)
                .contains(`HTML`)
                .next()
                .tuiScrollIntoView()
                .as(`content`);
        });

        for (const anchor of [
            `moser`,
            `thirlwell`,
            `briggs`,
            `introduction`,
            `knowles`,
            `war`,
        ]) {
            it(`anchor is #${anchor}`, () => {
                cy.get(`@example`)
                    .wait(5000)
                    .find(`a[href="#${anchor}"]`)
                    .eq(1)
                    .click({force: true})
                    .wait(5000);

                cy.tuiWaitBeforeScreenshot().matchImageSnapshot(`anchor-${anchor}`, {
                    capture: `viewport`,
                });
            });
        }
    });
});

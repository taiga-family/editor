describe(`Editor's anchors`, () => {
    beforeEach(() => {
        cy.viewport(1280, 500).tuiVisit(`/anchors`);

        cy.get(`tui-doc-example[heading="Anchors"]`).tuiScrollIntoView().as(`wrapper`);

        cy.get(`@wrapper`).findByAutomationId(`tui-doc-example`).as(`example`);
    });

    describe(`anchors`, () => {
        beforeEach(() => {
            cy.get(`@wrapper`)
                .find(`tui-editor`)
                .then(el => el.remove());

            cy.get(`@wrapper`)
                .find(`h4`)
                .contains(`Text`)
                .next()
                .then(el => el.remove());

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
                    .find(`a[href="#${anchor}"]`)
                    .click({force: true})
                    .wait(2000);

                cy.matchImageSnapshot(`anchor-${anchor}`, {capture: `viewport`});
            });
        }
    });
});

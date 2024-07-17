describe(`Editor's color picker`, () => {
    beforeEach(() => cy.tuiVisit(`color-picker`));

    it(`opened color picker`, () => {
        openColorPicker(`wrapper`);

        cy.tuiWaitBeforeScreenshot().matchImageSnapshot(`1-color-picker-with-hex`);
    });

    it(`opened color picker and change rgb`, () => {
        openColorPicker(`wrapper`);
        changeToHex();

        setInputBox(1, 255);
        setInputBox(2, 255);
        setInputBox(3, 255);

        cy.tuiWaitBeforeScreenshot().matchImageSnapshot(`2-color-picker-with-rgb`);
    });

    function openColorPicker(alias: string): void {
        cy.get(`#dropdown`)
            .findByAutomationId(`tui-doc-example`)
            .tuiScrollIntoView()
            .as(alias);

        cy.get(`@wrapper`)
            .tuiScrollIntoView()
            .findByAutomationId(`color-picker__button`)
            .click();
    }

    function changeToHex(): void {
        cy.get(`tui-color-edit`)
            .find(`tui-select`)
            .findByAutomationId(`tui-primitive-textfield__native-input`)
            .click()
            .get(`tui-data-list button:nth-of-type(2)`)
            .click();
    }

    function setInputBox(index: 1 | 2 | 3, value: number): void {
        cy.get(`tui-color-edit`)
            .findByAutomationId(`tui-primitive-textfield__native-input`)
            .eq(index)
            .type(value.toString(), {force: true});
    }
});
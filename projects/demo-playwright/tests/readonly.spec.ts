import {TuiDemoPath} from '@demo/shared/routes';
import {expect, test} from '@playwright/test';

import {DemoPO} from '../utils/page-objects';

test.describe('Readonly and Disabled states', () => {
    test('check visible state on detail component', async ({page}) => {
        const demoPage = new DemoPO(page);

        await demoPage.goto(
            // cspell:disable-next-line
            `/${TuiDemoPath.StarterKit}?ngModel=%3Cdiv%20class%3D%22t-details-wrapper%20t-details-wrapper_rendered%22%3E%3Cdetails%20data-opened%3D%22false%22%3E%3Csummary%3E%3Cp%3E123123%3C%2Fp%3E%3C%2Fsummary%3E%3Cdiv%20data-type%3D%22details-content%22%3E%3Cp%3E123123123%3C%2Fp%3E%3C%2Fdiv%3E%3C%2Fdetails%3E%3Cbutton%20class%3D%22t-details-arrow%22%3E%3C%2Fbutton%3E%3C%2Fdiv%3E%3Cp%3E123%3C%2Fp%3E%3Cdiv%20class%3D%22t-details-wrapper%20t-details-wrapper_rendered%22%3E%3Cdetails%20data-opened%3D%22true%22%3E%3Csummary%3E%3Cp%3E123123%3C%2Fp%3E%3C%2Fsummary%3E%3Cdiv%20data-type%3D%22details-content%22%3E%3Cp%3E12123123%3C%2Fp%3E%3C%2Fdiv%3E%3C%2Fdetails%3E%3Cbutton%20class%3D%22t-details-arrow%22%3E%3C%2Fbutton%3E%3C%2Fdiv%3E%3Cp%3E%3C%2Fp%3E`,
        );

        const editor = demoPage.getEditor();

        await expect.soft(editor.editor).toHaveScreenshot('Readonly-01.png');
    });

    test('check readonly state on detail component', async ({page}) => {
        const demoPage = new DemoPO(page);

        await demoPage.goto(
            // cspell:disable-next-line
            `/${TuiDemoPath.StarterKit}?%5BreadOnly%5D=true&ngModel=%3Cdiv%20class%3D%22t-details-wrapper%20t-details-wrapper_rendered%22%3E%3Cdetails%20data-opened%3D%22false%22%3E%3Csummary%3E%3Cp%3E123123%3C%2Fp%3E%3C%2Fsummary%3E%3Cdiv%20data-type%3D%22details-content%22%3E%3Cp%3E123123123%3C%2Fp%3E%3C%2Fdiv%3E%3C%2Fdetails%3E%3Cbutton%20class%3D%22t-details-arrow%22%3E%3C%2Fbutton%3E%3C%2Fdiv%3E%3Cp%3E123%3C%2Fp%3E%3Cdiv%20class%3D%22t-details-wrapper%20t-details-wrapper_rendered%22%3E%3Cdetails%20data-opened%3D%22true%22%3E%3Csummary%3E%3Cp%3E123123%3C%2Fp%3E%3C%2Fsummary%3E%3Cdiv%20data-type%3D%22details-content%22%3E%3Cp%3E12123123%3C%2Fp%3E%3C%2Fdiv%3E%3C%2Fdetails%3E%3Cbutton%20class%3D%22t-details-arrow%22%3E%3C%2Fbutton%3E%3C%2Fdiv%3E%3Cp%3E%3C%2Fp%3E`,
        );

        const editor = demoPage.getEditor();

        await expect.soft(editor.editor).toHaveScreenshot('Readonly-02.png');
    });

    test('check disabled state on detail component', async ({page}) => {
        const demoPage = new DemoPO(page);

        await demoPage.goto(
            // cspell:disable-next-line
            `/${TuiDemoPath.StarterKit}?ngModel=%3Cdiv%20class%3D%22t-details-wrapper%20t-details-wrapper_rendered%22%3E%3Cdetails%20data-opened%3D%22false%22%3E%3Csummary%3E%3Cp%3E123123%3C%2Fp%3E%3C%2Fsummary%3E%3Cdiv%20data-type%3D%22details-content%22%3E%3Cp%3E123123123%3C%2Fp%3E%3C%2Fdiv%3E%3C%2Fdetails%3E%3Cbutton%20class%3D%22t-details-arrow%22%3E%3C%2Fbutton%3E%3C%2Fdiv%3E%3Cp%3E123%3C%2Fp%3E%3Cdiv%20class%3D%22t-details-wrapper%20t-details-wrapper_rendered%22%3E%3Cdetails%20data-opened%3D%22true%22%3E%3Csummary%3E%3Cp%3E123123%3C%2Fp%3E%3C%2Fsummary%3E%3Cdiv%20data-type%3D%22details-content%22%3E%3Cp%3E12123123%3C%2Fp%3E%3C%2Fdiv%3E%3C%2Fdetails%3E%3Cbutton%20class%3D%22t-details-arrow%22%3E%3C%2Fbutton%3E%3C%2Fdiv%3E%3Cp%3E%3C%2Fp%3E&Show%20preview=false&disabled=true`,
        );

        const editor = demoPage.getEditor();

        await expect.soft(editor.editor).toHaveScreenshot('Readonly-03.png');
    });

    test('check visible controls on image', async ({page}) => {
        const demoPage = new DemoPO(page);

        await demoPage.goto(
            // cspell:disable-next-line
            `/${TuiDemoPath.StarterKit}?Show%20preview=false&disabled=false&ngModel=<img%20src%3D"data:image%2Fsvg%2Bxml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjU2cHgiIGhlaWdodD0iMjcxcHgiIHZpZXdCb3g9IjAgMCAyNTYgMjcxIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQiPgogICAgPHRpdGxlPkFuZ3VsYXI8L3RpdGxlPgogICAgPGRlZnM%2BCiAgICAgICAgPGxpbmVhckdyYWRpZW50IHgxPSIyNS4wNzE0ODc2JSIgeTE9IjkwLjkyOTIwMDclIiB4Mj0iOTYuMTMyMTg1NSUiIHkyPSI1NS4xODM3MDg5JSIgaWQ9ImxpbmVhckdyYWRpZW50LTEiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRTQwMDM1IiBvZmZzZXQ9IjAlIj48L3N0b3A%2BCiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGNjBBNDgiIG9mZnNldD0iMjQlIj48L3N0b3A%2BCiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGMjA3NTUiIG9mZnNldD0iMzUuMiUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0RDMDg3RCIgb2Zmc2V0PSI0OS40JSI%2BPC9zdG9wPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjOTcxN0U3IiBvZmZzZXQ9Ijc0LjUlIj48L3N0b3A%2BCiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiM2QzAwRjUiIG9mZnNldD0iMTAwJSI%2BPC9zdG9wPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ%2BCiAgICAgICAgPGxpbmVhckdyYWRpZW50IHgxPSIyMS44NjI4NjUyJSIgeTE9IjEyLjA1NzUzMTElIiB4Mj0iNjguMzY2OTkyMSUiIHkyPSI2OC4yMTAzMDA2JSIgaWQ9ImxpbmVhckdyYWRpZW50LTIiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRkYzMUQ5IiBvZmZzZXQ9IjAlIj48L3N0b3A%2BCiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGRjVCRTEiIHN0b3Atb3BhY2l0eT0iMCIgb2Zmc2V0PSIxMDAlIj48L3N0b3A%2BCiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnPgogICAgICAgIDxwYXRoIGQ9Ik0yNTYsNDUuMTc4NzA4MyBMMjQ2Ljc1NjA3MSwxOTAuMzM2ODY1IEwxNTguMzczMzIxLDAgTDI1Niw0NS4xNzg3MDgzIFogTTE5NC43ODMwMzUsMjMyLjg3NTc2OCBMMTI4LjAwMDU3NiwyNzAuOTgxMTgyIEw2MS4yMTY5NjUzLDIzMi44NzU3NjggTDc0Ljc5OTg1NzcsMTk5Ljk1Nzc0NCBMMTgxLjIwMDE0MiwxOTkuOTU3NzQ0IEwxOTQuNzgzMDM1LDIzMi44NzU3NjggWiBNMTI4LjAwMDU3Niw3Mi4yNDg4MTQ2IEwxNjIuOTk0NzA5LDE1Ny4zMjU0NjggTDkzLjAwNTI5MSwxNTcuMzI1NDY4IEwxMjguMDAwNTc2LDcyLjI0ODgxNDYgWiBNOS4xNDk0MDMxMywxOTAuMzM2ODY1IEwwLDQ1LjE3ODcwODMgTDk3LjYyNjY3OSwwIEw5LjE0OTQwMzEzLDE5MC4zMzY4NjUgWiIgZmlsbD0idXJsKCNsaW5lYXJHcmFkaWVudC0xKSI%2BPC9wYXRoPgogICAgICAgIDxwYXRoIGQ9Ik0yNTYsNDUuMTc4NzA4MyBMMjQ2Ljc1NjA3MSwxOTAuMzM2ODY1IEwxNTguMzczMzIxLDAgTDI1Niw0NS4xNzg3MDgzIFogTTE5NC43ODMwMzUsMjMyLjg3NTc2OCBMMTI4LjAwMDU3NiwyNzAuOTgxMTgyIEw2MS4yMTY5NjUzLDIzMi44NzU3NjggTDc0Ljc5OTg1NzcsMTk5Ljk1Nzc0NCBMMTgxLjIwMDE0MiwxOTkuOTU3NzQ0IEwxOTQuNzgzMDM1LDIzMi44NzU3NjggWiBNMTI4LjAwMDU3Niw3Mi4yNDg4MTQ2IEwxNjIuOTk0NzA5LDE1Ny4zMjU0NjggTDkzLjAwNTI5MSwxNTcuMzI1NDY4IEwxMjguMDAwNTc2LDcyLjI0ODgxNDYgWiBNOS4xNDk0MDMxMywxOTAuMzM2ODY1IEwwLDQ1LjE3ODcwODMgTDk3LjYyNjY3OSwwIEw5LjE0OTQwMzEzLDE5MC4zMzY4NjUgWiIgZmlsbD0idXJsKCNsaW5lYXJHcmFkaWVudC0yKSI%2BPC9wYXRoPgogICAgPC9nPgo8L3N2Zz4K"%20width%3D"100"%20alt%3D""%20title%3D""%20draggable%3D""%20style%3D"">`,
        );

        await page.locator('tui-editor [contenteditable] tui-editor-resizable').hover();

        const editor = demoPage.getEditor();

        await expect.soft(editor.editor).toHaveScreenshot('Readonly-04.png');
    });

    test('check disabled controls on image', async ({page}) => {
        const demoPage = new DemoPO(page);

        await demoPage.goto(
            // cspell:disable-next-line
            `/${TuiDemoPath.StarterKit}?Show%20preview=false&disabled=true&ngModel=<img%20src%3D"data:image%2Fsvg%2Bxml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjU2cHgiIGhlaWdodD0iMjcxcHgiIHZpZXdCb3g9IjAgMCAyNTYgMjcxIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQiPgogICAgPHRpdGxlPkFuZ3VsYXI8L3RpdGxlPgogICAgPGRlZnM%2BCiAgICAgICAgPGxpbmVhckdyYWRpZW50IHgxPSIyNS4wNzE0ODc2JSIgeTE9IjkwLjkyOTIwMDclIiB4Mj0iOTYuMTMyMTg1NSUiIHkyPSI1NS4xODM3MDg5JSIgaWQ9ImxpbmVhckdyYWRpZW50LTEiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRTQwMDM1IiBvZmZzZXQ9IjAlIj48L3N0b3A%2BCiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGNjBBNDgiIG9mZnNldD0iMjQlIj48L3N0b3A%2BCiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGMjA3NTUiIG9mZnNldD0iMzUuMiUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0RDMDg3RCIgb2Zmc2V0PSI0OS40JSI%2BPC9zdG9wPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjOTcxN0U3IiBvZmZzZXQ9Ijc0LjUlIj48L3N0b3A%2BCiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiM2QzAwRjUiIG9mZnNldD0iMTAwJSI%2BPC9zdG9wPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ%2BCiAgICAgICAgPGxpbmVhckdyYWRpZW50IHgxPSIyMS44NjI4NjUyJSIgeTE9IjEyLjA1NzUzMTElIiB4Mj0iNjguMzY2OTkyMSUiIHkyPSI2OC4yMTAzMDA2JSIgaWQ9ImxpbmVhckdyYWRpZW50LTIiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRkYzMUQ5IiBvZmZzZXQ9IjAlIj48L3N0b3A%2BCiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGRjVCRTEiIHN0b3Atb3BhY2l0eT0iMCIgb2Zmc2V0PSIxMDAlIj48L3N0b3A%2BCiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnPgogICAgICAgIDxwYXRoIGQ9Ik0yNTYsNDUuMTc4NzA4MyBMMjQ2Ljc1NjA3MSwxOTAuMzM2ODY1IEwxNTguMzczMzIxLDAgTDI1Niw0NS4xNzg3MDgzIFogTTE5NC43ODMwMzUsMjMyLjg3NTc2OCBMMTI4LjAwMDU3NiwyNzAuOTgxMTgyIEw2MS4yMTY5NjUzLDIzMi44NzU3NjggTDc0Ljc5OTg1NzcsMTk5Ljk1Nzc0NCBMMTgxLjIwMDE0MiwxOTkuOTU3NzQ0IEwxOTQuNzgzMDM1LDIzMi44NzU3NjggWiBNMTI4LjAwMDU3Niw3Mi4yNDg4MTQ2IEwxNjIuOTk0NzA5LDE1Ny4zMjU0NjggTDkzLjAwNTI5MSwxNTcuMzI1NDY4IEwxMjguMDAwNTc2LDcyLjI0ODgxNDYgWiBNOS4xNDk0MDMxMywxOTAuMzM2ODY1IEwwLDQ1LjE3ODcwODMgTDk3LjYyNjY3OSwwIEw5LjE0OTQwMzEzLDE5MC4zMzY4NjUgWiIgZmlsbD0idXJsKCNsaW5lYXJHcmFkaWVudC0xKSI%2BPC9wYXRoPgogICAgICAgIDxwYXRoIGQ9Ik0yNTYsNDUuMTc4NzA4MyBMMjQ2Ljc1NjA3MSwxOTAuMzM2ODY1IEwxNTguMzczMzIxLDAgTDI1Niw0NS4xNzg3MDgzIFogTTE5NC43ODMwMzUsMjMyLjg3NTc2OCBMMTI4LjAwMDU3NiwyNzAuOTgxMTgyIEw2MS4yMTY5NjUzLDIzMi44NzU3NjggTDc0Ljc5OTg1NzcsMTk5Ljk1Nzc0NCBMMTgxLjIwMDE0MiwxOTkuOTU3NzQ0IEwxOTQuNzgzMDM1LDIzMi44NzU3NjggWiBNMTI4LjAwMDU3Niw3Mi4yNDg4MTQ2IEwxNjIuOTk0NzA5LDE1Ny4zMjU0NjggTDkzLjAwNTI5MSwxNTcuMzI1NDY4IEwxMjguMDAwNTc2LDcyLjI0ODgxNDYgWiBNOS4xNDk0MDMxMywxOTAuMzM2ODY1IEwwLDQ1LjE3ODcwODMgTDk3LjYyNjY3OSwwIEw5LjE0OTQwMzEzLDE5MC4zMzY4NjUgWiIgZmlsbD0idXJsKCNsaW5lYXJHcmFkaWVudC0yKSI%2BPC9wYXRoPgogICAgPC9nPgo8L3N2Zz4K"%20width%3D"100"%20alt%3D""%20title%3D""%20draggable%3D""%20style%3D"">`,
        );

        await page
            .locator('tui-editor [contenteditable] tui-editor-resizable')
            .hover({force: true});

        const editor = demoPage.getEditor();

        await expect.soft(editor.editor).toHaveScreenshot('Readonly-05.png');
    });
});

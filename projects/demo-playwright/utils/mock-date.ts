import {type Page} from '@playwright/test';

export async function tuiMockDate(page: Page, date: Date): Promise<void> {
    await page.addInitScript((fakeNow) => {
        globalThis.Date = class extends Date {
            constructor(...args: Array<Date | number | string>) {
                if (args.length === 0) {
                    super(fakeNow);
                } else {
                    super(...(args as [Date | number | string]));
                }
            }
        } as unknown as typeof Date;

        Date.now = () => fakeNow;
    }, date.valueOf());
}

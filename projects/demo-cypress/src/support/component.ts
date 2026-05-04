import { provideTaiga } from "@taiga-ui/core";
import {provideNoopAnimations} from '@angular/platform-browser/animations';
import {mount} from 'cypress/angular';

declare global {
    namespace Cypress {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        interface Chainable<Subject> {
            mount: typeof mount;
        }
    }
}

export const stableMount: typeof mount = (component, config) =>
    mount(component, {
        ...config,
        providers: [
            ...(config?.providers || []),
            provideNoopAnimations(),
            provideTaiga(),
        ],
    }).then((mountResponse) =>
        cy
            .get('body')
            .find('[data-cy-root]')
            .then(async () => {
                cy.document().its('fonts.status').should('equal', 'loaded');

                return mountResponse.fixture.whenStable().then(() => mountResponse);
            }),
    );

Cypress.Commands.add('mount', stableMount);

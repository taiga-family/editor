import {Location} from '@angular/common';
import {type ErrorHandler, inject, Injectable} from '@angular/core';

@Injectable()
export class ServerErrorHandler implements ErrorHandler {
    protected readonly location = inject(Location);

    public handleError(error: Error | string): void {
        const errorMessage = (typeof error === 'string' ? error : error.message) || '';

        console.error(this.location.path(), errorMessage);

        if (
            // Default environment variables for GitHub CI
            process.env.CI // https://docs.github.com/en/actions/reference/workflows-and-actions/variables#default-environment-variables
        ) {
            process.exit(1);
        }
    }
}

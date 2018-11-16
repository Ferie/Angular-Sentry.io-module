import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as Sentry from "@sentry/browser";

@Injectable()
export class SentryErrorHandler implements ErrorHandler {
    constructor() {
        console.log('Sentry.io init');

        // Sentry inside the constructor instantiate it only if needed
        Sentry.init({
            dsn: 'https://<sentry_public_key>@sentry.io/<sentry_project_id>',
            beforeSend(event, hint) {
                if (event.message.startsWith('Non-Error exception captured') && hint.originalException['error']) {
                    console.log('inside Sentry');
                    // We want to ignore those kind of errors
                    return null;
                }
                return event;
            }
        })
    }

    public handleError(error) {
        Sentry.captureException(error.originalError || error);
        throw error;
    }
}

@NgModule({
    imports: [
        CommonModule
    ]
})
export class SentryModule {
    public static forRoot() {
        return {
            ngModule: SentryModule,
            imports: [BrowserModule],
            providers: [{ provide: ErrorHandler, useClass: SentryErrorHandler }],
        };
    }
}

import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Throw exception to Sentry.io';

    throwError() {
        throw new Error('Non-Error exception captured');
    }
}

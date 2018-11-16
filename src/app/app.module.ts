import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { SentryModule } from './modules/sentry/sentry.module';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';

@NgModule({
    imports:      [
        BrowserModule,
        environment.enableSentry ? SentryModule.forRoot() : []
    ],
    declarations: [ AppComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }

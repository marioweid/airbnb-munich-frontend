import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CsvTableComponent} from './csv-table/csv-table.component';
import {MaterialDesignModule} from './material-design/material-design.module';

@NgModule({
  declarations: [
    AppComponent,
    CsvTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialDesignModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

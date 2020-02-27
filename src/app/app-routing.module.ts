import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CsvTableComponent} from './csv-table/csv-table.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {LandingPageComponent} from './landing-page/landing-page.component';


const routes: Routes = [
  {path: 'csv-table', component: CsvTableComponent},
  {path: 'csvTable', redirectTo: '/csv-table', pathMatch: 'full'},
  {path: '', component: LandingPageComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

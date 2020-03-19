import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AvailableFilesListComponent} from './available-files-list/available-files-list-component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {TableViewComponent} from './table-view/table-view.component';


const routes: Routes = [
  {path: 'files', component: AvailableFilesListComponent},
  {path: 'files/:filename', component: TableViewComponent},
  {path: '', component: LandingPageComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

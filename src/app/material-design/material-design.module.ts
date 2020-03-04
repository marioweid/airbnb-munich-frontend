import {NgModule} from '@angular/core';

import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';

const modules: any[] = [
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule
];

@NgModule({
  declarations: [],
  imports: [...modules],
  exports: [...modules]
})
export class MaterialDesignModule {
}

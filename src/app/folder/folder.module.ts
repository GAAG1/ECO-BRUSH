import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';


import { FolderPage } from './folder.page';

import { PersonasComponent } from '../componentes/personas/personas.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FolderPageModule
  ],
  declarations: [
    FolderPage,
    PersonasComponent // ✅ decláralo aquí
  ]
})
export class FolderPageModule {}

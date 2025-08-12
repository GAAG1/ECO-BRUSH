
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AppComponent } from './app.component';
import { SupabaseService } from './Service/supabase.service';
import { PersonasComponent } from './componentes/personas/personas.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([]),
    IonicModule.forRoot({ mode: 'ios' }),
    PersonasComponent,
    IonicModule
  ],
  declarations: [AppComponent],
  providers: [SupabaseService],
  bootstrap: [AppComponent],
})
export class AppModule {}

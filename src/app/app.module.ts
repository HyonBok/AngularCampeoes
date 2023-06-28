import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CampeoesComponent } from './campeoes/campeoes.component';
import { FormsModule } from '@angular/forms';
import { CampeaoDetailComponent } from './campeao-detail/campeao-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CampeoesComponent,
    CampeaoDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MessagesComponent } from './messages/messages.component';
import { HttpClientModule } from '@angular/common/http';
import { CampeaoSearchComponent } from './campeao-search/campeao-search.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CampeoesComponent } from './campeoes/campeoes.component';
import { CampeaoDetailComponent } from './campeao-detail/campeao-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    CampeaoSearchComponent,
    DashboardComponent,
    CampeoesComponent,
    CampeaoDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


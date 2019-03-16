import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetalleTweetComponent } from './componentes/detalle-tweet/detalle-tweet.component';
import { MatCardModule, MatDividerModule, MatButtonModule, MatInputModule } from '@angular/material';
import { ListaTweetComponent } from './componentes/lista-tweet/lista-tweet.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    DetalleTweetComponent,
    ListaTweetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

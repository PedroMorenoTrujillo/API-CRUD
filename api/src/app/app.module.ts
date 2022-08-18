import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeroService } from './services/heroService';
import { ObservableHeroService } from './services/observableHeroService';
import { TabledataModule } from './components/tabledata/tabledata.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    TabledataModule,
  ],
  providers: [
    HeroService,
    ObservableHeroService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

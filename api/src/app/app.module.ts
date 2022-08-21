import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HighchartsChartModule } from 'highcharts-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeroService } from './services/heroService';
import { ObservableHeroService } from './services/observableHeroService';
import { TabledataModule } from './components/tabledata/tabledata.module';
import { ModalModule } from './components/modal/modal.module';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    TabledataModule,
    ModalModule,
    HighchartsChartModule,
  ],
  providers: [HeroService, ObservableHeroService],
  bootstrap: [AppComponent],
})
export class AppModule {}

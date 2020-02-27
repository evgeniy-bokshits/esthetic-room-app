import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from '@core/app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { ViewlayoutmainComponent } from './viewlayoutmain/viewlayoutmain.component';
import { MainLayoutComponent } from './view/layout/main-layout/main-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewlayoutmainComponent,
    MainLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
    constructor(private router: Router) {}
    ngDoBootstrap() {
        this.router.initialNavigation();
    }
 }

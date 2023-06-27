import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MefdevModule } from './shared/mefdev/mefdev.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MefdevModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicDemoModule } from 'projects/basic-demo/src/public-api';
import { ExampleComponent } from './example/example.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BasicDemoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

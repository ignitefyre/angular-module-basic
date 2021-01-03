import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BasicDemoComponent } from './basic-demo.component';

@NgModule({
  declarations: [BasicDemoComponent],
  imports: [
    CommonModule
  ],
  exports: [BasicDemoComponent]
})
export class BasicDemoModule { }

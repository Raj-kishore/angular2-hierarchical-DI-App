import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GrandChildComponent } from './grand-child.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [GrandChildComponent],
  exports : [GrandChildComponent]
})
export class GrandChildModule { }

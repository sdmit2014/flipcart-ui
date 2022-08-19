import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FcDateComponent } from './components/fc-date/fc-date.component';
import { FcRadioButtonComponent } from './components/fc-radio-button/fc-radio-button.component';



@NgModule({
  declarations: [
    FcDateComponent,
    FcRadioButtonComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }

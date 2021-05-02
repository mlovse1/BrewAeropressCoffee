import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TimerPage } from './timer';
import { NgCircleProgressModule } from 'ng-circle-progress';


@NgModule({
  declarations: [
    TimerPage,
  ],
  imports: [
    IonicPageModule.forChild(TimerPage),
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animation: false,
      responsive: true,
      renderOnClick: false
    }),
  ],
})
export class TimerPageModule {};
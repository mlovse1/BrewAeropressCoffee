import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController, NavParams } from 'ionic-angular';
import { NgCircleProgressModule } from 'ng-circle-progress';


/**
 * Generated class for the TimerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-timer',
  templateUrl: 'timer.html',
})
export class TimerPage {
  elapsed: any = {
    h: '00',
    m: '00',
    s: '00'
  }
  progress:any = 0;
  overallProgress:any = 0;
  percent: number = 0;
  radius: number = 100;
  minutes: number = 1;
  seconds: any = 10;
  timer: any = false;
  overallTimer: any = false;
  //Accepts inputed value, or defaults to 1 minute 30 seconds
  fullTime: any = '00:01:30';


  countDownTimer: any = false;
  timeLeft: any = {
    m: '00',
    s: '00'
  };
  remainingTime = `${this.timeLeft.m}:${this.timeLeft.s}`;

 
  
  touchMe() {
    console.log('touched');
  }

  startTimer() {
    
    if(this.timer) {
      clearInterval(this.timer);
      clearInterval(this.countDownTimer);
    } 
    if(!this.overallTimer) {
      this.progressTimer();
      
    }

      this.timer = false;
      this.percent = 0;
      this.progress = 0;

      let timeSplit = this.fullTime.split(':');
      this.minutes = timeSplit[1];
      this.seconds = timeSplit[2];

      let totalSeconds = Math.floor(this.minutes * 60) + parseInt(this.seconds);
      let secondsLeft = totalSeconds;

      let forwardsTimer = () => {
        if (this.percent == this.radius) clearInterval(this.timer)
        this.percent = Math.floor((this.progress / totalSeconds) * 100)
        ++this.progress
      }

      let backwardsTimer = () => {
        if (secondsLeft >= 0) {
          this.timeLeft.m = Math.floor(secondsLeft / 60)
          this.timeLeft.s = secondsLeft - (60 * this.timeLeft.m)
          this.remainingTime = `${this.pad(this.timeLeft.m, 2)}:${this.pad(this.timeLeft.s, 2)}`
          secondsLeft--;
        }
      }

      // run once when clicked
      forwardsTimer()
      backwardsTimer()

      // timers start 1 second later
      this.countDownTimer = setInterval(backwardsTimer, 1000)
      this.timer = setInterval(forwardsTimer, 1000)
  }

  stopTimer() {
    clearInterval(this.countDownTimer);
    clearInterval(this.timer);
    clearInterval(this.overallTimer);
    this.countDownTimer = false;
    this.overallTimer = false;
    this.timer = false;    
    this.percent = 0;
    this.progress = 0;
    this.elapsed = {
      h: '00',
      m: '00',
      s: '00'
    }
   
    this.timeLeft = {
      m: '00',
      s: '00'
    }
    this.remainingTime = `${this.pad(this.timeLeft.m, 2)}:${this.pad(this.timeLeft.s, 2)}`;

    const toast = this.toast.create({
      message: 'You stopped the clock' + "...",
      duration: 3000
    });
    toast.present();
    }

  progressTimer() {
    let countDownDate = new Date();

    this.overallTimer = setInterval(() => {
      let now = new Date().getTime();

      // Find the distance between now an the count down date
      var distance = now - countDownDate.getTime();

      // Time calculations for hours, minutes and seconds
     
      this.elapsed.h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.elapsed.m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      this.elapsed.s = Math.floor((distance % (1000 * 60)) / 1000);
      
      this.elapsed.h = this.pad(this.elapsed.h, 2);
      this.elapsed.m = this.pad(this.elapsed.m, 2);
      this.elapsed.s = this.pad(this.elapsed.s, 2);



    },1000)
  }

    pad(num, size) {
      let s = num+"";
      while (s.length < size) s = "0" + s;
      return s;
    }

    updateMyDate($event) {
     console.log($event);
    }

pickGrind($event){
    console.log($event);
    var choice = $event;
    if(choice=="fine"){
      var fine=this.toast.create({
        message: 'You choose a fine grind. The best brew time will be 1:00 minutes...',
        duration: 3000,
        position: "middle"
      })
      fine.present();
    }
    if(choice=="med"){
      var med=this.toast.create({
        message: 'You choose a medium grind. The best brew time will be 2:00 - 3:00 minutes...',
        duration: 3000,
        position: "middle"
      })
      med.present();
    }
    if(choice=="medcs"){
      var medcs=this.toast.create({
        message: 'You choose a medium-coarse grind. The best brew time will be 3:00 - 4:00 minutes...',
        duration: 3000,
        position: "middle"
      })
      medcs.present();
    }
    if(choice=="cors"){
      var cors=this.toast.create({
        message: 'You choose a coarse grind. The best brew time will be 4:00 - 5:00 minutes...',
        duration: 3000,
        position: "middle"
      })
      cors.present();
    }
   

    }




  constructor(public navCtrl: NavController, public navParams: NavParams, public toast:ToastController) {
  }
  


  ionViewDidLoad() {
    console.log('ionViewDidLoad TimerPage');
  }

}

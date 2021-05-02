import { Component, ViewChild, ViewChildren} from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})


export class ContactPage {
  @ViewChild('name') name;
  @ViewChild('email') email;
  @ViewChildren('comments') comments;
  constructor(public navCtrl: NavController, public toastCtrl: ToastController) {

  }


SubmitComments(){
  console.log("Submitting comments with these values ", this.name.value, this.email.value, this.comments.value)
  const toast = this.toastCtrl.create({
    message: 'Comments submitted successfully. Thank you ' + this.name.value + '!',
    duration: 3000
  });
  toast.present();
  }
}



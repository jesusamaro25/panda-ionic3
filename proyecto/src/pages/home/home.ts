import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegistroPage } from '../registro/registro';
import { TimelinePage } from '../timeline/timeline';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  email:string;
  contrasena:string;

  constructor(public navCtrl: NavController) {

  }



  login(){

    this.navCtrl.push(TimelinePage);
    console.log("Email :"+this.email)
    console.log("Contrasena :"+this.contrasena);

  }

  goRegister(){
    this.navCtrl.push(RegistroPage);
  }

}
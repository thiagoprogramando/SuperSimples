import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.page.html',
  styleUrls: ['./extrato.page.scss'],
})
export class ExtratoPage implements OnInit {

  constructor(private navCtrl : NavController) { }

  ngOnInit() {
  }

  dashboard(){
    this.navCtrl.navigateForward(['dashboard'])
  }

}

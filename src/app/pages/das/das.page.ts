import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-das',
  templateUrl: './das.page.html',
  styleUrls: ['./das.page.scss'],
})
export class DasPage implements OnInit {

  constructor(private navCtrl : NavController) { }

  ngOnInit() {
  }

  go(){
    this.navCtrl.navigateForward('dashboard');
  }

}

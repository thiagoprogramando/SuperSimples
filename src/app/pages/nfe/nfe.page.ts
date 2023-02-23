import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nfe',
  templateUrl: './nfe.page.html',
  styleUrls: ['./nfe.page.scss'],
})
export class NfePage implements OnInit {

  constructor(private NavCrt : NavController) { }

  ngOnInit() {
  }

  dashboard(){
    this.NavCrt.navigateForward(['dashboard']);
  }

}

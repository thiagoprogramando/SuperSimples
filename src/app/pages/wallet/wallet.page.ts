import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.page.html',
  styleUrls: ['./wallet.page.scss'],
})
export class WalletPage implements OnInit {

  constructor(private NavCrt : NavController) { }

  ngOnInit() {
  }

  extrato(){
    this.NavCrt.navigateForward(['extrato']);
  }

}

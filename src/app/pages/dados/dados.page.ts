import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dados',
  templateUrl: './dados.page.html',
  styleUrls: ['./dados.page.scss'],
})
export class DadosPage implements OnInit {

  constructor(private NavCrt : NavController) { }

  ngOnInit() {
  }

  dashboard(){
    this.NavCrt.navigateForward(['dashboard']);
  }

}

import { Router } from '@angular/router';
import { Component, OnInit, Renderer2, ViewChild } from '@angular/core';
import { AnimationController, Animation, Platform, Gesture, GestureController, GestureDetail } from '@ionic/angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  @ViewChild('blocks')      blocks: any;
  @ViewChild('background')  background: any;
  @ViewChild('swipeDown')   swipeDown: any;

  public options: Array<any> = [
    { icon: 'person-add-outline',         text: 'Indicar amigos', href: 'share'},
    { icon: 'document-attach-outline',    text: 'Cert CNPJ',      href: 'cnpj'},
    { icon: 'document-text-outline',      text: 'Emitir NFe',     href: 'nfe'},
    { icon: 'calendar-number-outline',    text: 'DAS',            href: 'das'},
    { icon: 'information-circle-outline', text: 'Borderô',        href: 'bordero'},
  ];

  public menuOptions: Array<any> = [
    { icon: 'barcode-outline',            text: 'Pagamentos', href: 'pay',      color: 'dark' },
    { icon: 'receipt-outline',            text: 'Extrato',    href: 'extrato',  color: 'success' },
    { icon: 'wallet-outline',             text: 'Carteira',   href: 'wallet',   color: 'warning' },
    { icon: 'qr-code-outline',            text: 'Pix',        href: 'pix',      color: 'danger' },
    { icon: 'call-outline',               text: 'Recargas',   href: '',         color: 'dark'},
    { icon: 'storefront-outline',         text: 'Parceiros',  href: '',         color: 'danger'},
  ];

  public slidesOptions: any = { slidesPerView: 3, freeMode: true };


  constructor(private animationCtrl: AnimationController, private router: Router) {
  }

  ngOnInit() {
  }

  go(page: any) {
    this.router.navigate(['/' + page]);
  }

}

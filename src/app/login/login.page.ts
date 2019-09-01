import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';;


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  @ViewChild("usernameInput") username;
  @ViewChild("passwordInput") password;
  
  
  constructor(public navCtrl:NavController,public alertCtrl:AlertController) { }

  ngOnInit() {

    
  }

    clickLogin(){
      const alert = this.alertCtrl.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'Username :'+this.username.value +' Password :' + this.password.value,
      buttons: ['OK']
     }).then(alert=> alert.present());
 
  }

}

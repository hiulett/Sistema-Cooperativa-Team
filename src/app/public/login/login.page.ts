import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

import { UsersData, CommonResponse } from 'src/app/interfaces';
import { EventsService } from 'src/app/events.service';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public username: string;
  public password: string;
  public error: string;
  public  islogin: string
  public Response : CommonResponse;

  usersData: UsersData[] = [];

  constructor(private authService: AuthenticationService,
    private eventService: EventsService, 
    public loadingController: LoadingController,
    public alertController: AlertController) { }

   ngOnInit() {
   
   
    
  }

   async login() {

    const loading = await this.loadingController.create({
      message: 'Please wait...',
      duration: 2000
    });
    await loading.present();

 
    this.Response =  await this.eventService.ValidateUser(this.username, this.password).toPromise();
    this.islogin  = this.Response.IsLogin
    
    if(this.islogin === 'true'){ 

      this.authService.login(this.username, this.password);
      
       const { role, data } = await loading.onDidDismiss();

      this.username = '';
      this.password = '';
    

    } else {

      const { role, data } = await loading.onDidDismiss();

      await this.presentAlertWrongUser();

      this.password = '';

    } 
  }

  async presentAlertWrongUser() {
    const alert = await this.alertController.create({
      header: 'Acceso incorrecto',
      message: 'Por favor colocar el usuario y password.',
      buttons: ['OK']
    });

    await alert.present();
  }


  
}

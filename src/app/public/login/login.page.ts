import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

import { UsersData, CommonResponse } from 'src/app/interfaces';
import { EventsService } from 'src/app/events.service';

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
    private eventService: EventsService) { }

   ngOnInit() {
   
   
    
  }

   async login() {

    this.Response =  await this.eventService.ValidateUser(this.username, this.password).toPromise();
    this.islogin  = this.Response.IsLogin
    

      this.authService.login(this.username, this.password);

    
  }

  userExists(username: string, password: string){
  
    let usersdt = this.usersData;
    console.log(usersdt);
  
    if(this.usersData.length < 1){
      
      return false;
     
  
    } else {
      var i = 0
      for(i = 0; i < usersdt.length; i++){

     
        if(usersdt[i].username === username && usersdt[i].password === password ){

         
          return true;
          
        } 
      }

      
      return false;
    
    }

  }

}

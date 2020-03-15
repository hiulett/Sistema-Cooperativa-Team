import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { dashboard, productos, ResumenModel, RootObject, UserProductsModel } from 'src/app/interfaces';
import { EventsService } from 'src/app/events.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  //dashboarddata : dashboard;
  ResumenModel : ResumenModel;
  nombreUsuario : string;
  depositoInversion: number;
  creditoPrestamo: number;
  productosArr: UserProductsModel[];
  RootData : RootObject



  constructor(private authService: AuthenticationService, 
    private eventService: EventsService, private router: Router) { }

  async ngOnInit() {

    //this.dashboarddata = await this.eventService.getDashBoard().toPromise();
    this.RootData = await this.eventService.getRootObject().toPromise();

    this.ResumenModel = this.RootData.ResumenModel;

    this.nombreUsuario = this.ResumenModel.Nombre;
    this.depositoInversion = this.ResumenModel.DepositoInversion;
    this.creditoPrestamo = this.ResumenModel.CreditoPrestamo;
    this.productosArr = await this.ResumenModel.UserProductList;
   

  }

  logout() {

    this.authService.logout();
  }
  navigate(id: string){
    console.log('id : ' || id);
    this.router.navigate(['/detail/', id ])
  };

  

}

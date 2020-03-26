import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movimiento, RootObjectDetails, ResumenModelList } from '../interfaces';
import { EventsService } from 'src/app/events.service';
import { AlertController } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  id: any;
  root: RootObjectDetails
  movimientos : ResumenModelList[]
  customPopoverOptions: any = {
    header: 'Productos del Usuario',
    subHeader: 'Selecciona tu producto',
    message: 'Solo selecciona un producto'
  };

  constructor(private eventService: EventsService, 
    private activatedRoute: ActivatedRoute, 
    private router: Router,
    public alertController: AlertController,
    private authService: AuthenticationService) {
    
    this.id = this.activatedRoute.snapshot.params.id;
    this.id = this.activatedRoute.snapshot.paramMap.get('id');

  }

  async ngOnInit() {
    console.log('id : ' || this.id);
    this.root = await this.eventService.GetUserAccountsTransactionsDetails(this.id).toPromise();
    this.movimientos = this.root.ResumenModelList
  }

  async logout() {

   

    const alert = await this.alertController.create({
      header: 'Salir',
      message: 'Esta seguro que desea salir de la app?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
           
          }
        }, {
          text: 'Si',
          handler: () => {
           

            this.authService.logout();
          }
        }
      ]
    });

    await alert.present();
  }

  navigate(id: string){
    console.log('id : ' || id);
    this.router.navigate(['/movement-detail/', id ])
  };

}

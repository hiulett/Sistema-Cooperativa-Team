import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication.service';
import { DetalleMoviento, DesgloseMovimiento } from '../interfaces';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-movement-detail',
  templateUrl: './movement-detail.page.html',
  styleUrls: ['./movement-detail.page.scss'],
})
export class MovementDetailPage implements OnInit {


  DetalleMoviento: DetalleMoviento;
  descripcion: string;
  fecha: string;
  montoPagado: string;
  desglose: DesgloseMovimiento[]; 
  estado: string;

  constructor(public alertController: AlertController,
    private authService: AuthenticationService, private eventService: EventsService) { }

 async ngOnInit() {
    this.DetalleMoviento = await this.eventService.getDetalleMov().toPromise();
    this.descripcion = this.DetalleMoviento.descripcion;
    this.fecha = this.DetalleMoviento.fecha;    
    this.montoPagado = this.DetalleMoviento.montoPagado;
    this.desglose = this.DetalleMoviento.desglose;
    this.estado = this.DetalleMoviento.estado;
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


}

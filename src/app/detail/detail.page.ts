import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movimiento,  ResumenModelList, RootObjectDetails, ProductosModelList, RootListaProductos } from '../interfaces';
import { EventsService } from 'src/app/events.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  id: any;
  Userid: any;
  root: RootObjectDetails;
  rootProductList: RootListaProductos;
  movimientos : ResumenModelList[]
  listaproductos : ProductosModelList[]
  customPopoverOptions: any = {
    header: 'Productos del Usuario',
    subHeader: 'Selecciona tu producto',
    //message: 'Solo selecciona un producto'
  };
  nombreUsuario : any;
  colors = [{ tipo: 1, color: "black" }, 
            { tipo: 2, color: "red" }, 
            { tipo: 0, color: "black" }]

  constructor(private eventService: EventsService, private activatedRoute: ActivatedRoute) {
    
    this.id = this.activatedRoute.snapshot.params.id;
    this.id = this.activatedRoute.snapshot.paramMap.get('id');

  }

  async ngOnInit() {
    this.Userid = "00001"

    console.log('id : ' || this.id);
    this.root = await this.eventService.GetUserAccountsTransactionsDetails(this.id).toPromise();
    this.rootProductList = await this.eventService.GetUserAccountsList(this.Userid).toPromise();
    this.movimientos = this.root.ResumenModelList
    this.listaproductos = this.rootProductList.ProductosModelList
  }

  public async onItemSelection(selection) {
    if ( selection != undefined) {
    console.log("item selected: "+ selection.detail.value);
    this.root = await this.eventService.GetUserAccountsTransactionsDetails(selection.detail.value).toPromise();
    this.movimientos = []
    this.movimientos = this.root.ResumenModelList
    } else {
    console.log("no item selected");
    }
    }

    public getColor(tipo) {
      return this.colors.filter(item => item.tipo === tipo)[0].color 
      
    }

  async logout() {

  }

}

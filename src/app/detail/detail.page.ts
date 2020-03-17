import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movimiento, RootObjectDetails, ResumenModelList } from '../interfaces';
import { EventsService } from 'src/app/events.service';

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

  constructor(private eventService: EventsService, private activatedRoute: ActivatedRoute) {
    
    this.id = this.activatedRoute.snapshot.params.id;
    this.id = this.activatedRoute.snapshot.paramMap.get('id');

  }

  async ngOnInit() {
    console.log('id : ' || this.id);
    this.root = await this.eventService.GetUserAccountsTransactionsDetails(this.id).toPromise();
    this.movimientos = this.root.ResumenModelList
  }

  async logout() {

  }

}

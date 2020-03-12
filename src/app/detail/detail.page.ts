import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  id: any;

  constructor(private activatedRoute: ActivatedRoute) {
    
    this.id = this.activatedRoute.snapshot.params.id;
    this.id = this.activatedRoute.snapshot.paramMap.get('id');

  }

  ngOnInit() {
    console.log('id : ' || this.id);
  }

}

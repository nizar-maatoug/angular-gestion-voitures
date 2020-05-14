import { Component, OnInit, Input } from '@angular/core';
import { Voiture } from '../../model/voiture.model';

@Component({
  selector: 'app-voiture-item',
  templateUrl: './voiture-item.component.html',
  styleUrls: ['./voiture-item.component.css']
})
export class VoitureItemComponent implements OnInit {

  @Input() voiture: Voiture;

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { attractions } from 'src/app/models/Attractions';
import { ATTRACTIONS } from 'src/app/service/attraction.mock';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {
  attraction:attractions[] = ATTRACTIONS;
  searchTerm:string;
  constructor() { }
  
  ngOnInit() {}
  

}

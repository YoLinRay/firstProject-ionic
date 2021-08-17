import { Injectable } from '@angular/core';
import { attractions } from '../models/Attractions';
import { ATTRACTIONS } from './attraction.mock';
@Injectable({
  providedIn: 'root'
})
export class AttractionService {
  attractions: attractions[] = ATTRACTIONS;
  constructor() { }
  getAttractions(): attractions[] {
    return this.attractions;
  }

  getAttraction(id: number): attractions {

    for (let i = 0; i < this.attractions.length; i++) {

      if (this.attractions[i].id === id) {

        return this.attractions[i];

      }
    }
    return null;
  }
  
}

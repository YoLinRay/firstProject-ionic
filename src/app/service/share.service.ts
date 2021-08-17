import { Injectable } from '@angular/core';
import { Shareboard } from './share.mock';
import { shareboard } from '../models/Shareboard';
@Injectable({
  providedIn: 'root'
})
export class ShareService {
 shareBoard:shareboard[]=Shareboard
  constructor() { }
  getShare(): shareboard[] {
    return this.shareBoard;
  }
  getBoard(id: number): shareboard{

    for (let i = 0; i < this.shareBoard.length; i++) {

      if (this.shareBoard[i].id === id) {

        return this.shareBoard[i];

      }
    }
    return null;
  }
}

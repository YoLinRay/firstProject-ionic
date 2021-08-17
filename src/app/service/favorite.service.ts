import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
@Injectable({
    providedIn: 'root'
})
export class favoriteService {
    private favorite = [];
    constructor(private router: Router) { }
    getFavorite() {
        return this.favorite
    }

    addFavorite(favorite) {
        this.favorite.push(favorite);
    }
    
   
    deleteFavorite(favorite) {
        for (let i = 0; i < this.favorite.length; i++) {
                if (this.favorite[i].save === false) {                
                    this.favorite.splice(i, 1);
                }  
        }
    }
   
    readFavorite() {
        this.router.navigate(['favorite']);
    }
}
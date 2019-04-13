import { Injectable } from '@angular/core';
declare let alertify: any;
@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

constructor() {}
 confirm(message: string, okcallback:() => any){
   // tslint:disable-next-line:only-arrow-functions
   alertify.confirm(message, function(e) {
     if(e){
       okcallback()
     } else {

     }
   });
  }

   success(message: string){
     alertify.success(message);

   }

   error(message: string){
     alertify.error(message);

   }

}



import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  constructor() { }
  productList =[{'productname':"", 'warrenty':"",'quantity':"",'amount':""}];

  saveData(input:any){
    this.productList.push(input);
    //console.log(this.productList)
  }

  getData(){
    return this.productList;
  }

}

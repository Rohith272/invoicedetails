import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }
  ProductList =[{'productname':"", 'warrenty':"",'quantity':"",'amount':""}];

  SaveData(input:any){
    this.ProductList.push(input);
    //console.log(this.ProductList)
  }

  GetData(){
    return this.ProductList;
  }

}

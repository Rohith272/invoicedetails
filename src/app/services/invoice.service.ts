import { Injectable } from '@angular/core';
import { ClientDetails } from '../models/client-details';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  constructor() { }
  ProductList=[{'productName':"",'warranty':"",'quantity':""}]
  ClientList:ClientDetails[] = [];
  //[{'invoiceNumber':"",'invoiceDate':"",'quarter':"",'modality':"",'subModality':"",'segment':"",'directionSns':"",'costumerName':"",'state':"",'employeeID':""}]

saveData(input:any){
  this.ClientList.push(input);
  console.log(this.ClientList)
}
getData(){
  return this.ClientList;
}

 
}

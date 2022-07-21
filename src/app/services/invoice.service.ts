import { Injectable } from '@angular/core';
import { InvoiceDetails } from '../models/invoicedetails';


@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  constructor() { }
 // ProductList=[{'productName':"",'warranty':"",'quantity':""}]
  ClientList:InvoiceDetails[] = [];
  //[{'invoiceNumber':"",'invoiceDate':"",'quarter':"",'modality':"",'subModality':"",'segment':"",'directionSns':"",'costumerName':"",'state':"",'employeeID':""}]

saveData(input:any){
  this.ClientList.push(input);
  console.log(this.ClientList)
}
getData(){
  return this.ClientList;
}

 
}

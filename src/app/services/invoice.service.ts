import { Injectable } from '@angular/core';
import { InvoiceDetails } from '../models/invoicedetails';


@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  constructor() { }
 
  invoiceList:InvoiceDetails[] = [];
 

saveData(input:any){
  this.invoiceList.push(input);
  console.log(this.invoiceList)
}
getData(){
  return this.invoiceList;
}

 
}

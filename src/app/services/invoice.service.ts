import { Injectable } from '@angular/core';
import { InvoiceDetails } from '../models/invoicedetails';


@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  isTrue!: boolean;
  current: InvoiceDetails[] = [];
  constructor() { }
 
  invoiceList:InvoiceDetails[] = [];
 

saveData(input:any){
  this.invoiceList.push(input);
}
getData(){
  return this.invoiceList;
}

update(obj:any,index:any){
  this.current = obj;
  this.invoiceList.splice(index,1);
  this.isTrue = true;
}
 
}

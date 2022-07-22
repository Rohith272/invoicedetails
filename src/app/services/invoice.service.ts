import { Injectable } from '@angular/core';
import { InvoiceDetails } from '../models/invoicedetails';


@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  isEdit!: boolean;
  current: InvoiceDetails | undefined ;
  constructor() { }
 
  invoiceList:InvoiceDetails[] = [];
 

saveData(invoice:InvoiceDetails){

  if (!this.isEdit)
  {
    this.invoiceList.push(invoice);
  }
  
  console.log(this.invoiceList)
}
getData(){
  return this.invoiceList;
}

update(invoice:InvoiceDetails,index:any){
  this.current = invoice;
  //this.invoiceList.splice(index,1);
  this.isEdit = true;
}
 
}

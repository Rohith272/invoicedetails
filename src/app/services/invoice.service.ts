import { Injectable } from '@angular/core';
import { InvoiceDetails } from '../models/invoicedetails';


@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  constructor() { }
 // ProductList=[{'productName':"",'warranty':"",'quantity':""}]
  invoiceList:InvoiceDetails[] = [];
  //[{'invoiceNumber':"",'invoiceDate':"",'quarter':"",'modality':"",'subModality':"",'segment':"",'directionSns':"",'costumerName':"",'state':"",'employeeID':""}]

saveData(input:any){
  this.invoiceList.push(input);
  console.log(this.invoiceList)
}
getData(){
  return this.invoiceList;
}

 
}

import { Injectable } from '@angular/core';
import { InvoiceDetails } from '../models/invoicedetails';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  isEdit!: boolean;
  current: InvoiceDetails | undefined;
  constructor(private router: Router) { }

  invoiceList: InvoiceDetails[] = [];


  saveData(invoice: InvoiceDetails) {

    if (!this.isEdit) {
      this.invoiceList.push(invoice);
    }
  }
  getData() {
    return this.invoiceList;
  }

  update(invoice: InvoiceDetails, index: any) {
    this.current = invoice;
    this.isEdit = true;
  }

}

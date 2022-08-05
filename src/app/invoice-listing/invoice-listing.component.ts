import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { InvoiceDetails } from '../models/invoicedetails';
import { InvoiceService } from '../services/invoice.service';




@Component({
  selector: 'app-invoice-listing',
  templateUrl: './invoice-listing.component.html',
  styleUrls: ['./invoice-listing.component.css']
})
export class InvoiceListingComponent implements OnInit {
  opened=false;
  selectedInvoice: InvoiceDetails | undefined ; 
  data: InvoiceDetails[] =[];

  constructor(private router:Router, private invoiceservice:InvoiceService) {
    this.data = this.invoiceservice.getData()
    this.dataSource = new MatTableDataSource<any>(this.data);
   }

  ngOnInit(): void {
      
  }

 public dataSource =new MatTableDataSource<any>([this.data]);
  displayedColumns: string[] = ['invoiceNumber','invoiceDate','amount','employeeID']

  addInvoice(){
    this.router.navigate(['/invoicedetails'])
    this.invoiceservice.current = undefined
  }
  

  displayData(row:any,index:any){
    this.selectedInvoice = row;
    this.opened=!this.opened;
    if (this.selectedInvoice)
      this.invoiceservice.update(this.selectedInvoice,index)
    //this.router.navigate(['/invoicedetails'])
  }

 
 }

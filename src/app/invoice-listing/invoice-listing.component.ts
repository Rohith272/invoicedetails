import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { InvoiceDetails } from '../models/invoicedetails';
import { InvoiceService } from '../services/invoice.service';
//import { ProductDetails } from '../models/product-details';



@Component({
  selector: 'app-invoice-listing',
  templateUrl: './invoice-listing.component.html',
  styleUrls: ['./invoice-listing.component.css']
})
export class InvoiceListingComponent implements OnInit {
  elem: InvoiceDetails[]= [];
  data: InvoiceDetails[] =[];
  //ProductList =[{'productName':"", 'warrenty':"",'quantity':"",'amount':""}];
  //ClientList = [{'invoiceNumber':"",'invoiceDate':"",'quarter':"",'modality':"",'subModality':"",'segment':"",'directionSns':"",'costumerName':"",'state':"",'employeeID':""}]
  constructor(private router:Router, private invoiceservice:InvoiceService) {
    this.data = this.invoiceservice.getData()
    this.dataSource = new MatTableDataSource<any>(this.data);
   }

  ngOnInit(): void {
      
  }

 public dataSource =new MatTableDataSource<any>([this.data]);
  //displayedColumns: string[] = ['invoiceNumber', 'invoiceDate', 'employeeID','quarter','modality','subModality','segment','directionSns','costumerName','state','employeeID'];
  displayedColumns: string[] = ['invoiceNumber','invoiceDate','amount','employeeID']

  addInvoice(){
    this.router.navigate(['/invoicedetails'])
    console.log(this.data)
  }

  displayData(row:any){
    //console.log(row);
    this.invoiceservice.update(row)
    this.router.navigate(['/invoicedetails'])
    
  }
 }

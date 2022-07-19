import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { InvoiceService } from '../services/invoice.service';
import { ProductDetails } from '../models/product-details';
import { ClientDetails } from '../models/client-details';


@Component({
  selector: 'app-invoice-listing',
  templateUrl: './invoice-listing.component.html',
  styleUrls: ['./invoice-listing.component.css']
})
export class InvoiceListingComponent implements OnInit {

  data: ClientDetails[] =[
    {invoiceNumber:"",invoiceDate:"",quarter:"",modality:"",subModality:"",segment:"",directionSns:"",costumerName:"",state:"",employeeID:""},
  ]
  ProductList =[{'productName':"", 'warrenty':"",'quantity':"",'amount':""}];
  ClientList = [{'invoiceNumber':"",'invoiceDate':"",'quarter':"",'modality':"",'subModality':"",'segment':"",'directionSns':"",'costumerName':"",'state':"",'employeeID':""}
]
  constructor(private router:Router, private invoiceservice:InvoiceService) {

   }
    
  ngOnInit(): void {
      this.data = this.invoiceservice.getData()
      this.dataSource = new MatTableDataSource<any>(this.ClientList);
  }

 public dataSource =new MatTableDataSource<any>([this.data]);
  //displayedColumns: string[] = ['invoiceNumber', 'invoiceDate', 'employeeID','quarter','modality','subModality','segment','directionSns','costumerName','state','employeeID'];
  displayedColumns: string[] = ['invoiceNumber','invoiceDate','employeeID']

  addInvoice(){
    this.router.navigate(['/invoicedetails'])
    console.log(this.data)
  }
 }

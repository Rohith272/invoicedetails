import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { InvoiceService } from '../services/invoice.service';
import { ProductDetails } from '../models/product-details';



@Component({
  selector: 'app-invoice-listing',
  templateUrl: './invoice-listing.component.html',
  styleUrls: ['./invoice-listing.component.css']
})
export class InvoiceListingComponent implements OnInit {

  productList =[{'productname':"", 'warrenty':"",'quantity':"",'amount':""}];
  constructor(private router:Router, private service:InvoiceService) {
    this.productList = this.service.getData();
    this.dataSource = new MatTableDataSource<any>(this.productList);

   }
    
  ngOnInit(): void {
  }

  data: ProductDetails[] =[
    {productname:"",warrenty:0,quantity:0,rate:0,amount:0},
  ]

  public dataSource =new MatTableDataSource<any>(this.productList);
  displayedColumns: string[] = ['productname', 'warrenty', 'quantity','amount'];
  addInvoice(){
    this.router.navigate(['/invoicedetails'])
    console.log(this.productList)
  }
 }

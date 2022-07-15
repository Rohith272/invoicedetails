import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import {ServiceService} from '../services/service.service'

export class ProductDetails {
  productname: string = "";
  warrenty: number = 0;
  quantity: number = 0;
  rate: number = 0;
  amount: number = 0;
}


@Component({
  selector: 'app-invoice-listing',
  templateUrl: './invoice-listing.component.html',
  styleUrls: ['./invoice-listing.component.css']
})
export class InvoiceListingComponent implements OnInit {

  productList =[{'productname':"", 'warrenty':"",'quantity':"",'amount':""}];
  constructor(private router:Router, private service:ServiceService) {
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

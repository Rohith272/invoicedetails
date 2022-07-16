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

  data: ProductDetails[] =[
    {productname:"",warrenty:0,quantity:0,rate:0,amount:0},
  ]
  ProductList =[{'productname':"", 'warrenty':"",'quantity':"",'amount':""}];
  constructor(private router:Router, private invoiceservice:InvoiceService) {

   }
    
  ngOnInit(): void {
    this.invoiceservice.GetData().subscribe((data)=>{
      this.ProductList.push(data);
      this.dataSource = new MatTableDataSource<any>(this.ProductList);
    });
  }

 public dataSource =new MatTableDataSource<any>([]);
  displayedColumns: string[] = ['productname', 'warrenty', 'quantity','amount'];

  addInvoice(){
    this.router.navigate(['/invoicedetails'])
    console.log(this.ProductList)
  }
 }

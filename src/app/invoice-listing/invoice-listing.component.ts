import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

export interface Element{
  Invoice:string;
  InvoiceDate:string;
  TotalAmount:string;
  EmployeeId:string;
}

@Component({
  selector: 'app-invoice-listing',
  templateUrl: './invoice-listing.component.html',
  styleUrls: ['./invoice-listing.component.css']
})
export class InvoiceListingComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  data: Element[] =[
    {Invoice:'',InvoiceDate:'',TotalAmount:'',EmployeeId:''},
  ]
  displayedColumns: string[] = ['Invoice', 'InvoiceDate', 'TotalAmount','EmployeeId'];
  dataSource = new MatTableDataSource(this.data);
  addInvoice(){
    this.router.navigate(['/invoicedetails'])
  }
 }

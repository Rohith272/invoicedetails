import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { InvoiceService } from '../services/invoice.service';
import { Router } from '@angular/router';
import { InvoiceDetails, InvoiceItem } from '../models/invoicedetails';



interface DirectSns {
  value: string;
  viewValue: string;
}


interface Product{
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-invoice-details-form',
  templateUrl: './invoice-details-form.component.html',
  styleUrls: ['./invoice-details-form.component.css']
})

export class InvoiceDetailsFormComponent implements OnInit {

  @Input() invoice:InvoiceDetails = new InvoiceDetails();
 
  //opened=false;
  constructor(private router:Router, private service:InvoiceService) {

    if (this.service.isEdit==true)
    {
      if (this.service.current)
        this.invoice = this.service.current;
    }
    
    
    
  }

  ngOnInit(): void {
  }

  directSNS: DirectSns[] = [
    {value: 'Direct', viewValue: 'Direct'},
    {value: 'SNS', viewValue: 'SNS'},

  ];

 
  productList:Product[]=[
    {value: 'Criticool', viewValue: 'Criticool'},
    {value: 'Billicare', viewValue: 'Billicare'},
    {value: 'OBM', viewValue: 'OBM'}
  ];
  
  
  displayedColumns: string[] = ['productName', 'warrenty', 'quantity','rate','amount','add','delete'];
  public dataSource =new MatTableDataSource<any>(this.invoice.item);

  getTotalAmount(element: InvoiceItem){
    element.amount = element.quantity*element.rate;
    this.invoice.total = this.invoice.item.reduce((total, invoiceItem)=> total + invoiceItem.amount,0);
    
  }

 
  //for adding row
  addRow() {
    this.invoice.item.push(new InvoiceItem())
    this.updateDataSource();
  }

  //for deleting an existing row
  deleteRow(index: number){
    this.invoice.item.splice(index,1);
    this.updateDataSource();
  }

  //for updating the datasource
  updateDataSource(){
    this.dataSource.data=this.invoice.item;
  }
  
  
  Save(){
    this.service.saveData(this.invoice);
    this.router.navigate(['/invoicelisting']);
  }

  

  
}

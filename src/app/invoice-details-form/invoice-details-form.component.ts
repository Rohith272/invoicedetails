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

  @Input() invoice:any = new InvoiceDetails();
 
  tab : object = new InvoiceItem();
  constructor(private router:Router, private service:InvoiceService) {

    if (this.service.isTrue==true)
    {
      this.invoice = this.service.current;
    }
    
  }

  ngOnInit(): void {
    
  }

  directSNS: DirectSns[] = [
    {value: 'Direct', viewValue: 'Direct'},
    {value: 'SNS', viewValue: 'SNS'},

  ];

 
  productName:Product[]=[
    {value: 'Criticool', viewValue: 'Criticool'},
    {value: 'Billicare', viewValue: 'Billicare'},
    {value: 'OBM', viewValue: 'OBM'}
  ];
  
  data: InvoiceDetails[] = [];
  displayedColumns: string[] = ['productName', 'warrenty', 'quantity','rate','amount','add','delete'];
  public dataSource =new MatTableDataSource<any>([this.data]);

  

  //for adding row
  addRow() {
    this.data.push(new InvoiceDetails())
    this.updateDataSource();
  }

  //for deleting an existing row
  deleteRow(index: number){
    this.data.splice(index,1);
    this.updateDataSource();
  }

  //for updating the datasource
  updateDataSource(){
    this.dataSource.data=this.data;
    console.log(this.data)
  }
  
  
  Save(){
    this.invoice.item = this.data
    this.service.saveData(this.invoice);
    this.invoice = new InvoiceDetails()
    this.router.navigate(['/invoicelisting']);
  }

  

}

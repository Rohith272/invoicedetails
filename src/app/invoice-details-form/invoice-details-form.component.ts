import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { InvoiceService } from '../services/invoice.service';
import { Router } from '@angular/router';
import { InvoiceDetails } from '../models/invoicedetails';



// export class ClientDetails{
//   invoiceNumber : any = "";
//   invoiceDate : any = "";
//   quarter: any = "";
//   modality: any= "";
//   subModality: any="";
//   segment: any= "";
//   directionSns: any= "";
//   costumerName: any = "";
//   state : any = "";
//   employeeID:any="";
// }
// export class ProductDetails {
//   productName: string = "";
//   warrenty: number = 0;
//   quantity: number = 0;
//   rate: number = 0;
//   amount: number = 0;
// }

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
  constructor(private router:Router, private service:InvoiceService) { }

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
  displayedColumns: string[] = ['productName', 'warrenty', 'quantity','amount','add','delete'];
  dataSource = new MatTableDataSource<any>(this.data);

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
  
  //for saving the data
  Save(){
    this.service.saveData(this.invoice);
    this.router.navigate(['/invoicelisting'])
}
}

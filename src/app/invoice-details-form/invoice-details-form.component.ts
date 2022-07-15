import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {ServiceService} from '../services/service.service';
import { Router } from '@angular/router';

export class ProductDetails {
  productname: string = "";
  warrenty: number = 0;
  quantity: number = 0;
  rate: number = 0;
  amount: number = 0;
}

export class ClientDetails{
  invoice_number : any = "";
  purchase_date : any = "";
  quarter: any = "";
  modality: any= "";
  sub_modality: any="";
  segment: any= "";
  direction_sns: any= "";
  costumer_name: any = "";
  state : any = "";
}
interface DirectSns {
  value: string;
  viewValue: string;
}

interface Region{
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

  @Input() client:any = new ClientDetails();
  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit(): void {

  }

  directSNS: DirectSns[] = [
    {value: 'Direct', viewValue: 'Direct'},
    {value: 'SNS', viewValue: 'SNS'},

  ];

  regionSel: Region[] = [
    {value: 'North', viewValue: 'North'},
    {value: 'South', viewValue: 'South'},
    {value: 'East', viewValue:'East'},
    {value: 'West', viewValue: 'West'},
  ];
  productName:Product[]=[
    {value: 'Criticool', viewValue: 'Criticool'},
    {value: 'Billicare', viewValue: 'Billicare'},
    {value: 'OBM', viewValue: 'OBM'},

  ]

  data: ProductDetails[] =[
    {productname:"",warrenty:0,quantity:0,rate:0,amount:0},
  ]
  displayedColumns: string[] = ['productname', 'warrenty', 'quantity','amount','add','delete'];
  dataSource = new MatTableDataSource(this.data);

  //for adding row
  addRow() {
    this.data.push(new ProductDetails())
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
    //console.log(this.data)
  }

  //for saving the data
  Save(){
      this.router.navigate(['/invoicelisting'])
      this.service.saveData(this.data);
  }
}

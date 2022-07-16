import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { InvoiceService } from '../services/invoice.service';
import { Router } from '@angular/router';
import {ProductDetails} from '../models/product-details'
import {ClientDetails} from '../models/client-details'


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
  constructor(private router:Router, private service:InvoiceService) { }

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

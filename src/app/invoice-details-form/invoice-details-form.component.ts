import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface Element {
  productname: string;
  warrenty: number;
  quantity: number;
  rate: number;
  amount: number;
}

interface DirectSns {
  value: string;
  viewValue: string;
}

interface Region{
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-invoice-details-form',
  templateUrl: './invoice-details-form.component.html',
  styleUrls: ['./invoice-details-form.component.css']
})
export class InvoiceDetailsFormComponent implements OnInit {

  displayedColumns: string[] = ['productname', 'warrenty', 'quantity','rate','amount'];
 
  
  constructor() { }

  ngOnInit(): void {
  }

  DirectSNS: DirectSns[] = [
    {value: 'Direct', viewValue: 'Direct'},
    {value: 'SNS', viewValue: 'SNS'},

  ];

  RegionSel: Region[] = [
    {value: 'North', viewValue: 'North'},
    {value: 'South', viewValue: 'South'},
    {value: 'East', viewValue:'East'},
    {value: 'West', viewValue: 'West'},
  ];

   data: Element[] =[
    {productname:'criticool',warrenty:4,quantity:3,rate:200,amount:600},
    {productname:'Billicare',warrenty:4,quantity:3,rate:200,amount:600},
    {productname:'OBM',warrenty:4,quantity:3,rate:200,amount:600}
  ];
  dataSource = new MatTableDataSource(this.data);
}

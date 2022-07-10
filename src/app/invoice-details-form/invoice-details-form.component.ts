import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface Element {
  productname: string;
  warrenty: string;
  quantity: string;
  rate: string;
  amount: string;
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

<<<<<<< HEAD
=======
  displayedColumns: string[] = ['productname', 'warrenty', 'quantity','rate','amount'];
 
>>>>>>> 1734c0f3de3d3af389a43607be929531bdaae48d
  
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
  productName:Product[]=[
    {value: 'Criticool', viewValue: 'Criticool'},
    {value: 'Billicare', viewValue: 'Billicare'},
    {value: 'OBM', viewValue: 'OBM'},

  ]

<<<<<<< HEAD
  data: Element[] =[
    {productname:'',warrenty:'',quantity:'',rate:'',amount:''},
  ]
  displayedColumns: string[] = ['productname', 'warrenty', 'quantity','amount'];
  dataSource = new MatTableDataSource(this.data);
  addRow() {
   const newRow: Element = {
      productname:'',warrenty:'',quantity:'',rate:'',amount:'',
    };
    this.dataSource.data = [newRow, ...this.dataSource.data];
  }
  deleteRow(index: any){
    this.data.splice(index, 1);
  }
=======
   data: Element[] =[
    {productname:'criticool',warrenty:4,quantity:3,rate:200,amount:600},
    {productname:'Billicare',warrenty:4,quantity:3,rate:200,amount:600},
    {productname:'OBM',warrenty:4,quantity:3,rate:200,amount:600}
  ];
  dataSource = new MatTableDataSource(this.data);
>>>>>>> 1734c0f3de3d3af389a43607be929531bdaae48d
}

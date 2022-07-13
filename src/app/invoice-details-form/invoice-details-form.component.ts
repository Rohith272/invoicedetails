import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

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

  
  constructor(private router:Router) { }

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

  data: Element[] =[
    {productname:'',warrenty:'',quantity:'',rate:'',amount:''},
  ]
  displayedColumns: string[] = ['productname', 'warrenty', 'quantity','amount','add','delete'];
  dataSource = new MatTableDataSource(this.data);
  addRow() {
   const newRow: Element = {
      productname:'',warrenty:'',quantity:'',rate:'',amount:'',
    };
    //this.dataSource.data = [newRow, ...this.dataSource.data];
    this.data.push(newRow)
    this.updateDataSource();
    //this.dataSource.data=this.data
  }
  deleteRow(index: number){
    this.data.splice(index,1);
    //this.dataSource.data=this.data
    this.updateDataSource();
  }

  updateDataSource(){
    this.dataSource.data=this.data;
  }
}

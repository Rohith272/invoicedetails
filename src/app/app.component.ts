import { Component } from '@angular/core';


interface DirectSns {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'invoicedetails';


  DirectSNS: DirectSns[] = [
    {value: 'Direct', viewValue: 'Direct'},
    {value: 'SNS', viewValue: 'SNS'},

  ];
}

export class InvoiceDetails {
    invoiceId:number=0 ;
    invoiceNumber : any = "";
    invoiceDate : any = "";
    directionSns: any= "";
    customerName:any="";
    employeeID:any="";
    amount: number = 0;
    item: InvoiceItem[] = [new InvoiceItem()];
  }
  export class InvoiceItem {
    productName: any = "";
    warrenty: number = 0;
    quantity: number = 0;
    rate: number = 0;
} 


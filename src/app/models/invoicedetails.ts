export class InvoiceDetails {
    invoiceId:number=0 ;
    invoiceNumber : any = "";
    invoiceDate : any = "";
    directionSns: any= "";
    customerName:any="";
    employeeID:any="";
    total: number = 0;
    item: InvoiceItem[] = [new InvoiceItem()];
  }
  export class InvoiceItem {
    productName: any = "";
    warrenty: number = 0;
    quantity: number = 0;
    rate: number = 0;
    amount: number = 0;
    disc: number = 0;
    discount: number = 0;
    netAmount: number = 0;
} 


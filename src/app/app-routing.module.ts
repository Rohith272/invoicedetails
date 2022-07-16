import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoiceDetailsFormComponent } from './invoice-details-form/invoice-details-form.component';
import { InvoiceListingComponent } from './invoice-listing/invoice-listing.component';

const routes: Routes = [
  {path:'invoicedetails',component:InvoiceDetailsFormComponent},
  {path:'invoicelisting',component:InvoiceListingComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

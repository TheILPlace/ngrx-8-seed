import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../../models/customer';
import { DataStoreFacadeService } from '../../store/data/data.store.facade.service';

@Component({
  selector: 'app-customers-container',
  templateUrl: './customers-container.html',
  styleUrls: ['./customers-container.css']
})
export class CustomersContainerComponent implements OnInit {

  customers$: Observable<Array<Customer>>;
  selectedCustomer$: Observable<Customer>;

    constructor(private dataStoreFacadeService: DataStoreFacadeService) {

    this.customers$ = this.dataStoreFacadeService.customersList$;
    this.selectedCustomer$ = this.dataStoreFacadeService.selectedCustomer$;

   }

  ngOnInit() {
    this.dataStoreFacadeService.loadCustomersAction();
  }


  onCustomerAdded(customer: Customer) {
    this.dataStoreFacadeService.addCustomerAction(customer);

  }

  onCustomerSelected(id: number) {
    this.dataStoreFacadeService.selectCustomerAction(id);
  }
}

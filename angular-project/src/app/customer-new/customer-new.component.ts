import {Component, EventEmitter, OnInit, Output} from "@angular/core";
import {Customer} from "../customer";
import {CustomerService} from "../customer.service";

@Component({
  selector: 'app-customer-new',
  templateUrl: './customer-new.component.html',
  styleUrls: ['./customer-new.component.css']
})
export class CustomerNewComponent implements OnInit {

  @Output() created = new EventEmitter();

  customer: Customer = new Customer();

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
  }

  create() {
    this.customerService.createCustomer(this.customer)
      .subscribe(() => {
        this.customer = new Customer();
        this.created.emit(true);
      });
  }

  discard() {
        this.created.emit(false);
  }
}


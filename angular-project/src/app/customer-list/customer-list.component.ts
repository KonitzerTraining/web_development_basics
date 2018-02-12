import {Component, OnInit} from "@angular/core";
import {CustomerService} from "../customer.service";
import {Customer} from "../customer";
import {Router} from "@angular/router";

@Component({
  selector: "app-customer-list",
  templateUrl: "./customer-list.component.html",
  styleUrls: ["./customer-list.component.css"]
})
export class CustomerListComponent implements OnInit {

  createFlag = false;

  customers: Customer[];

  // DI
  constructor(private customerService: CustomerService,
              private router: Router) {
  }

  ngOnInit() {
    this.getCustomers();
  }

  getCustomersPromise() {
    this.customerService.getCustomersPromise()
      .then((data) => {
        this.customers = data;
      });
  }

  private getCustomers() {
    this.customerService.getCustomers()
      .subscribe((data) => {
        this.customers = data;
      });
  }

  public deleteCustomer(id) {
    this.customerService.deleteCustomer(id)
      .subscribe(() => {
        this.getCustomers();
      });
  }

  public create() {
    this.createFlag = true;
  }

  public onCreation(created) {

    this.createFlag = false;
    if (created) {
      this.getCustomers();
    }
  }

  goToEditCustomer(id) {
    console.log(id);

    this.router.navigate([`/customers/${id}`]);
  }
}

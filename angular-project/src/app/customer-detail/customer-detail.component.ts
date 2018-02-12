import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {CustomerService} from "../customer.service";
import {Customer} from "../customer";

@Component({
  selector: "app-customer-detail",
  templateUrl: "./customer-detail.component.html",
  styleUrls: ["./customer-detail.component.css"]
})
export class CustomerDetailComponent implements OnInit {

  id;
  customer: Customer = new Customer();

  constructor(private route: ActivatedRoute,
              private router: Router,
              private customerService: CustomerService) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.getCustomer();
  }

  getCustomer() {
    this.customerService.getOneCustomer(this.id)
      .subscribe((customer) => {
        this.customer = customer;
      });
  }

  saveCustomer() {
    this.customerService.editCustomer(this.customer)
      .subscribe(() => {
        this.router.navigate(["/customers"]);
      });
  }

  discard() {
    this.router.navigate(["/customers"]);
  }
}

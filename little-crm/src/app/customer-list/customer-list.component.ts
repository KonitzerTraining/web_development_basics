import {Component, OnInit} from '@angular/core';
import {Customer} from "../customer";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  public customers: Customer[] = [
    {
      id: 234,
      fullname: "asdf"
    },
    {
      id: 235,
      fullname: "asdf"
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}

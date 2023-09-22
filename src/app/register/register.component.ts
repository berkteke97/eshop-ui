import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/customer';
import { CustomerService } from '../customer/customer.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  customer = new Customer();
  showAlert = false;
  constructor(private customerService: CustomerService) { }

  ngOnInit() {
  }

  closeAlert() {
    this.showAlert = false;
  }
  saveStudent() {
    this.customerService.createCustomer(this.customer).subscribe((response) => {
      console.log(response);
      this.showAlert = true;
      this.customer = new Customer();
    });
  }

}

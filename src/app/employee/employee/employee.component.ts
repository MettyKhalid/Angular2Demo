import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEmployee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {

  employee!: IEmployee ;
  statusMessage: string = "Loading data. Please wait ...";

  constructor(private actRoute: ActivatedRoute,
              private employeeService: EmployeeService) { }

  ngOnInit(): void {
    console.log('the onInit from EmployeeComponent');
    this.fetchEmployeeByCode();
  }

  fetchEmployeeByCode() {
    const code = this.actRoute.snapshot.paramMap.get('code') || '';
    this.employeeService.getEmployeesByCode(code)
        .subscribe(
          data => {
            if (data == null || data.length == 0 ) {
              console.log("Employee with the specified code does not exist");
              this.statusMessage = "Employee with the specified code does not exist";
            } else {
              this.employee = data[0];
            }
          },
          err => {
            this.statusMessage = "Problem with the service.Please try again after sometime";
            console.log(err);
          }
    )
  }

}

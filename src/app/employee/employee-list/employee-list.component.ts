import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {

  employees: IEmployee[] = [];

  selectedEmployeesGender: string = "All"

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    console.log('the onInit from EmployeeListComponent');
    this.fetchEmployees();
  }

  fetchEmployees() {
    this.employeeService.getEmployees().subscribe((res) => {
        this.employees = res;
    })
  }

  getEmployees(gender: string): void {
    // console.log("From Parent " + gender)
    // this.employees = this.employeesInit
    // if (gender !== "All") {
    //   this.employees = this.employees.filter(e => e.gender === gender);
    // }
    this.selectedEmployeesGender = gender;
  }

  trackByEmpCode(index: number, employee: any): string {
    return employee.code;
  }

  getAllEmployeesCount(): number {
    return this.employees.length;
  }

  getAllMaleEmployeesCount(): number {
    return this.employees.filter(e => e.gender === "Male").length;
  }

  getAllFemaleEmployeesCount(): number {
    return this.employees.filter(e => e.gender === "Female").length;
  }

  showGreetMessage(childData: string): void{
     alert('Hello from ' + childData);
  }

}

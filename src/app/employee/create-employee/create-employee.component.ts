import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employeeForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.employeeForm = new FormGroup({
      fullName: new FormControl(),
      email: new FormControl(),
      // create skills form group
      skills: new FormGroup({
        skillName: new FormControl(),
        experienceInYear: new FormControl(),
        profeciency: new FormControl()
      })
    })
  }

  onSubmit(): void{
    console.log(this.employeeForm);
  }

}

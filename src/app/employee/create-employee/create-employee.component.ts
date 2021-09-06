import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employeeForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    //Create Form Group instance using FormGroup Object 
    // this.employeeForm = new FormGroup({
    //   fullName: new FormControl(),
    //   email: new FormControl(),
    //   // create skills form group
    //   skills: new FormGroup({
    //     skillName: new FormControl(),
    //     experienceInYear: new FormControl(),
    //     profeciency: new FormControl()
    //   })
    // })

    //Create Form Group instance using FormBuilder Object 
    this.employeeForm = this.fb.group({
      fullName: ['',Validators.required] ,
      email: [''],
      // create skills form group
      skills: this.fb.group({
        skillName: [''],
        experienceInYear: [''],
        profeciency: ['beginner']
      })
    })
  }

  onSubmit(): void{
    console.log(this.employeeForm);
  }

  onLoadDataClick():void{
     
    this.employeeForm.patchValue({
      fullName: "Noufel",
      email: "bNoufel@gmail.com",
      skills: {
        skillName: "Java",
        experienceInYear: "4",
        profeciency: "intermediate"
      }
    });
  }

}

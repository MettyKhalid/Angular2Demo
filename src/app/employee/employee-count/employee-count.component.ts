import { EventEmitter } from '@angular/core';
import { Component, OnInit,Input, Output } from '@angular/core';


@Component({
  selector: 'app-employee-count',
  templateUrl: './employee-count.component.html',
  styleUrls: ['./employee-count.component.css']
})
export class EmployeeCountComponent implements OnInit {

  txtInput: string = "Test";
  gender: string = "All";

  @Input()
  all!: number;
  @Input()
  male!: number;
  @Input()
  female!: number;

  @Output() greetEvent = new EventEmitter();
  @Output() genderEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onChangeInput(e: any):void{
    this.txtInput = e.target.value;
    console.log(this.txtInput);
  }

  showParentMessage(): void {
     this.greetEvent.emit(this.txtInput);
  }

  onSelectGender(): void {
    this.genderEvent.emit(this.gender);
    console.log(this.gender);
  }

  onChangeGender(data: Event): void {
    let vInputHtmlElem = data.target as HTMLInputElement;
    console.log("From onChangeGender " + vInputHtmlElem.id);
    this.gender = vInputHtmlElem.id;
  }

}

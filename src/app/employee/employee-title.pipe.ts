import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'employeeTitle'
})
export class EmployeeTitlePipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
    if (args[0] == "Male") {
      return "Mr." + value;
    } else {
      return "Miss." + value;
    }
  }
}

import { Injectable } from '@angular/core';
import { IEmployee } from './employee';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { ErrorObserver } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private _httpClient: HttpClient) {}

  baseUrl: string = "http://192.168.54.213:3000/api/products";

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getEmployees(): Observable<IEmployee[]> {
    return this._httpClient.get<IEmployee[]>(this.baseUrl)
               .pipe(
                   retry(1),
                   catchError(this.processError)
    )
  };

  getEmployeesByCode(code: string): Observable<IEmployee[]> {
    console.log('From getEmployeesByCode in EmployeeService code is:' + code);
    console.log(this.baseUrl + "/" + code);

    return this._httpClient.get<IEmployee[]>(this.baseUrl + "/" + code)
               .pipe(
                   retry(1),
                   catchError(this.processError)
    )
  }

  processError(err: ErrorObserver<IEmployee[]> ) {
     let message = '';
     if(err.error instanceof ErrorEvent) {
       message = err.error.message;
     } else {
       message = `Error Code: ${err.error.name}\nMessage: ${err.error.name}`;
     }
     console.log(message);
     return throwError(message);
  }

}

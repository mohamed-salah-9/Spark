import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http : HttpClient) { }

  getAllEmployees() {
    return this.http.get<any[]>('assets/Employees.json');
}
}

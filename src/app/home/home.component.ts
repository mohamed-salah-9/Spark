import { Component, OnInit } from '@angular/core';
import {EmployeeService} from 'src/app/services/employee.service'
import { SortEvent } from 'primeng/api';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  employees : any[] = [];
  selectedemployees : any[];
  cols: any[];
  exportColumns: any[];
  constructor(private ES : EmployeeService) { }

  ngOnInit() {
    this.Allemployees();
    this.cols = [
      { field: 'fullName_FL', header: 'Name' },
      { field: 'fullName_SL', header: 'Title' },
      { field: 'hiringDate', header: 'Hiring Date' },
      { field: 'firstContractingSalary', header: 'Salary' }
  ];


  } 


  customSort(event: SortEvent) {
    event.data.sort((data1, data2) => {
        let value1 = data1[event.field];
        let value2 = data2[event.field];
        let result = null;

        if (value1 == null && value2 != null)
            result = -1;
        else if (value1 != null && value2 == null)
            result = 1;
        else if (value1 == null && value2 == null)
            result = 0;
        else if (typeof value1 === 'string' && typeof value2 === 'string')
            result = value1.localeCompare(value2);
        else
            result = (value1 < value2) ? -1 : (value1 > value2) ? 1 : 0;

        return (event.order * result);
    });
}
 
  Allemployees(){
    this.ES.getAllEmployees().subscribe(
      data => {this.employees = data}
      
    ) 
  }
}

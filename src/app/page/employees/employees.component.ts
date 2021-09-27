import { Employee } from './../../models/employee.model';
import { EmployeeService } from './../../services/employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employees :Employee[];

  constructor(private employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.employees=this.employeeService.onGet();
  }
  onDelete(id:Number){
    this.employeeService.onDelete(id);
  }
}
